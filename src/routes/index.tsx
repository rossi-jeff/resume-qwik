import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
	return <div>Home works</div>
})

export const head: DocumentHead = {
	title: 'Jeff Rossi | Software Developer',
	meta: [
		{
			name: 'description',
			content: 'Jeff Rossi | Software Developer',
		},
	],
}
