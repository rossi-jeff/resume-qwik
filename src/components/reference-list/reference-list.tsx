import { component$ } from '@builder.io/qwik'
import { type Reference } from '~/types/reference.type'
import { ReferenceCard } from '../reference-card/reference-card'

export interface ReferenceListProps {
	references: Reference[]
}

export const ReferenceList = component$<ReferenceListProps>((props) => {
	const { references } = props
	return (
		<div class="p-2">
			<h1>References</h1>
			{references.map((reference) => (
				<ReferenceCard key={reference.Id} reference={reference} />
			))}
		</div>
	)
})
