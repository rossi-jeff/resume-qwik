import { component$ } from '@builder.io/qwik'
import { type Link } from '../../types/link.type'
import { LinkRow } from '../link-row/link-row'

export interface LinkTableProps {
	links: Link[]
}

export const LinkTable = component$<LinkTableProps>((props) => {
	const { links } = props
	return (
		<div class="p-2">
			<h1>Links</h1>
			<div class="table-header">
				<div class="flex-grow">Title</div>
				<div class="w-20">Type</div>
				<div class="w-20 text-right">Visit</div>
			</div>
			{links.map((link, index) => (
				<LinkRow key={link.Id} index={index} link={link} />
			))}
		</div>
	)
})
