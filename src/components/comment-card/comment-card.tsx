import { component$ } from '@builder.io/qwik'
import { type Comment } from '~/types/comment.type'
import { FormatName } from '~/lib/format-name'

export interface CommentCardProps {
	comment: Comment
}

export const CommentCard = component$<CommentCardProps>((props) => {
	const { comment } = props
	const getAuthor = (comment: Comment) => {
		let name: string = ''
		if (comment.Admins && comment.Admins.length) {
			name = FormatName(comment.Admins[0].Name)
		} else if (comment.References && comment.References.length) {
			name = FormatName(comment.References[0].Name)
		} else if (comment.Visitors && comment.Visitors.length) {
			name = FormatName(comment.Visitors[0].Name)
		}
		return name
	}
	return (
		<div class="card">
			<div>{comment.Message}</div>
			<div class="w-full text-right">
				--&nbsp;
				{getAuthor(comment)}
			</div>
		</div>
	)
})
