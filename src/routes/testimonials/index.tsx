import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { GraphQlClient } from '~/lib/graph-ql-client'
import { GET_COMMENTS_QUERY } from '~/graphql/queries/get-comments'
import { type Comment } from '~/types/comment.type'
import { CommentList } from '~/components/comment-list/comment-list'

export const useComments = routeLoader$(async () => {
	const client = new GraphQlClient()
	const req = await client.query({ query: GET_COMMENTS_QUERY })
	const res = await req.json()
	return res.data.getComments as Comment[]
})

export default component$(() => {
	const comments = useComments()
	return <CommentList comments={comments.value} />
})
