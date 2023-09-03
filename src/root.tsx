import { component$, useSignal } from '@builder.io/qwik'
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from '@builder.io/qwik-city'
import { RouterHead } from './components/router-head/router-head'

import './global.css'
import { paletteNames } from './lib/palettes'

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Don't remove the `<head>` and `<body>` elements.
	 */
	const palette = useSignal(paletteNames[0])
	return (
		<QwikCityProvider>
			<head>
				<meta charSet="utf-8" />
				<link rel="manifest" href="/manifest.json" />
				<RouterHead />
				<ServiceWorkerRegister />
			</head>
			<body lang="en" data-theme={palette}>
				<RouterOutlet />
			</body>
		</QwikCityProvider>
	)
})
