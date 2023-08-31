import { component$ } from '@builder.io/qwik'
import { type Comment } from '../../types/comment.type'
import { CommentCard } from '../comment-card/comment-card'

export interface CommentListProps {
	comments: Comment[]
}

export const CommentList = component$<CommentListProps>((props) => {
	const { comments } = props
	return (
		<div class="p-2">
			<h1>Testimonials</h1>
			{comments.map((comment) => (
				<CommentCard key={comment.Id} comment={comment} />
			))}
		</div>
	)
})
