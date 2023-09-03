import { component$, $ } from '@builder.io/qwik'
import { ResumeSchool } from '~/components/resume-school/resume-school'
import { type School } from '~/types/school.type'
import { type Job } from '~/types/job.type'
import { ResumeJob } from '~/components/resume-job/resume-job'
import { type Reference } from '~/types/reference.type'
import { ResumeReference } from '~/components/resume-reference/resume-reference'
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city'
import { GraphQlClient } from '~/lib/graph-ql-client'
import { GET_SCHOOLS_QUERY } from '~/graphql/queries/get-schools'
import { GET_JOBS_QUERY } from '~/graphql/queries/get-jobs'
import { GET_REFERENCES_QUERY } from '~/graphql/queries/get-references'

export const useSchools = routeLoader$(async () => {
	const client = new GraphQlClient()
	const req = await client.query({ query: GET_SCHOOLS_QUERY })
	const res = await req.json()
	return res.data.getSchools as School[]
})

export const useJobs = routeLoader$(async () => {
	const client = new GraphQlClient()
	const req = await client.query({ query: GET_JOBS_QUERY })
	const res = await req.json()
	return res.data.getJobs as Job[]
})

export const useReferences = routeLoader$(async () => {
	const client = new GraphQlClient()
	const req = await client.query({ query: GET_REFERENCES_QUERY })
	const res = await req.json()
	return res.data.getReferences as Reference[]
})

export default component$(() => {
	const jobs = useJobs()
	const schools = useSchools()
	const references = useReferences()

	const print = $(() => {
		const container = document.getElementById('print-resume')
		if (container) {
			const styles = document.styleSheets
			const content = container.innerHTML
			const printWindow = window.open('', '', 'height=500, width=500')
			if (printWindow) {
				printWindow.document.write('<html>')

				printWindow.document.write('<head>')
				printWindow.document.write(
					`<link rel='stylesheet' href='${styles[0].href}' />`
				)
				printWindow.document.write('</head>')

				printWindow.document.write('<body style="padding: 1em">')
				printWindow.document.write(content)
				printWindow.document.write('</body>')
				printWindow.document.write('</html>')
				printWindow.document.close()
				printWindow.print()
			}
		}
	})
	return (
		<div>
			<div class="flex mx-2">
				<button onClick$={print}>Print</button>
				<span class="ml-4">
					Choose "Save as PDF" from print dialog to download
				</span>
			</div>

			<div id="print-resume">
				<h3>Jeff Rossi</h3>
				<div>Software Developer</div>
				<hr class="border-b border-black" />
				<br />
				<h3>Education</h3>
				<hr class="border-b border-black" />
				<br />
				{schools.value.map((school: School) => (
					<ResumeSchool key={school.Id} school={school} />
				))}
				<h3>Employment</h3>
				<hr class="border-b border-black" />
				<br />
				{jobs.value.map((job: Job) => (
					<ResumeJob key={job.Id} job={job} />
				))}
				<h3>References</h3>
				<hr class="border-b border-black" />
				<br />
				{references.value.map((reference: Reference) => (
					<ResumeReference key={reference.Id} reference={reference} />
				))}
				<h3>Online</h3>
				<hr class="border-b border-black" />
				<br />
				<div>
					<strong>React:</strong> https://resume-react.jeff-rossi.com/
				</div>
				<div>
					<strong>Vue:</strong> https://resume-vue.jeff-rossi.com/
				</div>
				<div>
					<strong>Angular:</strong> https://resume-angular.jeff-rossi.com/
				</div>
				<div>
					<strong>Svelte:</strong> https://resume-svelte.jeff-rossi.com/
				</div>
				<br />
				<h3>Contact</h3>
				<hr class="border-b border-black" />
				<br />
				<div>
					<strong>Address:</strong> 1506 Tuscaloosa Ave, Holly Hill Florida
					32117
				</div>
				<div>
					<strong>Home:</strong> (386) 226-8913
				</div>
				<div>
					<strong>Cell:</strong> (386) 316-8485
				</div>
				<div>
					<strong>Email:</strong> inquiries@jeff-rossi.com
				</div>
				<br />
			</div>
		</div>
	)
})

export const head: DocumentHead = {
	title: 'Jeff Rossi | Resume',
	meta: [
		{
			name: 'description',
			content: 'Jeff Rossi | Software Developer',
		},
	],
}
