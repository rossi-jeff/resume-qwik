import { component$ } from '@builder.io/qwik'
import { FormatAddress } from '~/lib/format-address'
import { type Job } from '~/types/job.type'

export interface JobCardProps {
	job: Job
}

export const JobCard = component$<JobCardProps>((props) => {
	const { job } = props
	return (
		<div class="card">
			<h3>{job.Company}</h3>
			{job.From && job.To && (
				<div class="flex flex-wrap">
					<div class="mr-4">
						<strong class="mr-2">From</strong>
						{job.From.Month} {job.From.Year}
					</div>
					<div>
						<strong class="mr-2">To</strong>
						{job.To.Month} {job.To.Year}
					</div>
				</div>
			)}
			{job.Address && (
				<div>
					<strong class="mr-2">Address</strong>
					{FormatAddress(job.Address)}
				</div>
			)}
			{job.Title && (
				<div>
					<strong class="mr-2">Title</strong>
					{job.Title}
				</div>
			)}
			{job.Duties && (
				<div>
					<strong class="mr-2">Duties</strong>
					{job.Duties}
				</div>
			)}
		</div>
	)
})
