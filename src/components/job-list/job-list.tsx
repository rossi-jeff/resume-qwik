import { component$ } from '@builder.io/qwik'
import { type Job } from '../../types/job.type'
import { JobCard } from '../job-card/job-card'

export interface JobListProps {
	jobs: Job[]
}

export const JobList = component$<JobListProps>((props) => {
	const { jobs } = props
	return (
		<div class="p-2">
			<h1>Employment</h1>
			{jobs.map((job) => (
				<JobCard key={job.Id} job={job} />
			))}
		</div>
	)
})
