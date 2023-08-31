import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { GraphQlClient } from '~/lib/graph-ql-client'
import { GET_JOBS_QUERY } from '~/graphql/queries/get-jobs'
import { type Job } from '../../types/job.type'
import { JobList } from '../../components/job-list/job-list'

export const useJobs = routeLoader$(async () => {
	const client = new GraphQlClient()
	const req = await client.query({ query: GET_JOBS_QUERY })
	const res = await req.json()
	return res.data.getJobs as Job[]
})

export default component$(() => {
	const jobs = useJobs()
	return <JobList jobs={jobs.value} />
})
