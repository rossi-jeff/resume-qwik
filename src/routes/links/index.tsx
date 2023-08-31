import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { GET_LINKS_QUERY } from '../../graphql/queries/get-links'
import { GraphQlClient } from '../../lib/graph-ql-client'
import { type Link } from '../../types/link.type'
import { LinkTable } from '../../components/link-table/link-table'

export const useLinks = routeLoader$(async () => {
	const client = new GraphQlClient()
	const req = await client.query({ query: GET_LINKS_QUERY })
	const res = await req.json()
	return res.data.getLinks as Link[]
})

export default component$(() => {
	const links = useLinks()
	return <LinkTable links={links.value} />
})
