import { component$ } from '@builder.io/qwik'
import { Navigation } from '../navigation/navigation'

export interface HeaderBarProps {}

export const HeaderBar = component$<HeaderBarProps>(() => {
	return (
		<div class="header-bar">
			<div class="flex">
				<h3>Jeff Rossi</h3>
				<span class="mx-2">|</span>
				<span>Software Developer</span>
			</div>
			<Navigation />
		</div>
	)
})
