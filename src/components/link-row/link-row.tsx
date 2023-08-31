import { component$ } from '@builder.io/qwik'
import { type Link } from '../../types/link.type'

export interface LinkRowProps {
	link: Link
	index: number
}

export const LinkRow = component$<LinkRowProps>((props) => {
	const { link, index } = props
	let className = 'row'
	if (index % 2 == 0) className += ' alternate'
	return (
		<div class={className}>
			<div class="flex flex-wrap">
				<div class="flex-grow font-bold">{link.Title}</div>
				<div class="w-20">{link.Type}</div>
				<div class="w-20 text-right">
					<a href={link.Url} target="_blank">
						Visit
					</a>
				</div>
			</div>
			<div>{link.Description}</div>
		</div>
	)
})
