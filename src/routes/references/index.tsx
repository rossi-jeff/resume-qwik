import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { GraphQlClient } from '~/lib/graph-ql-client'
import { GET_REFERENCES_QUERY } from '~/graphql/queries/get-references'
import { type Reference } from '~/types/reference.type'
import { ReferenceList } from '~/components/reference-list/reference-list'

export const useReferences = routeLoader$(async () => {
	const client = new GraphQlClient()
	const req = await client.query({ query: GET_REFERENCES_QUERY })
	const res = await req.json()
	return res.data.getReferences as Reference[]
})

export default component$(() => {
	const references = useReferences()
	return <ReferenceList references={references.value} />
})
