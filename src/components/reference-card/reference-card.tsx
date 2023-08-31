import { component$, $ } from '@builder.io/qwik'
import { type Reference } from '~/types/reference.type'
import { FormatName } from '../../lib/format-name'

export interface ReferenceCardProps {
	reference: Reference
}

export const ReferenceCard = component$<ReferenceCardProps>((props) => {
	const { reference } = props
	const toggle = $((id: string) => {
		const el = document.getElementById(id)
		if (el) el.classList.toggle('open')
	})
	return (
		<div class="card">
			{reference.Name && <h3>{FormatName(reference.Name)}</h3>}
			{reference.Company && (
				<div>
					<strong class="mr-2">Company</strong>
					{reference.Company}
				</div>
			)}
			{reference.Title && (
				<div>
					<strong class="mr-2">Title</strong>
					{reference.Title}
				</div>
			)}
			{((reference.Phones && reference.Phones.length > 0) ||
				(reference.Emails && reference.Emails.length > 0)) && (
				<div>
					<button onClick$={() => toggle(`contact-info-${reference.Id}`)}>
						Contact Information
					</button>
					<div id={'contact-info-' + reference.Id} class="accordion-content">
						{reference.Phones && reference.Phones.length > 0 && (
							<div>
								<strong class="mr-2">Phone</strong>
								{reference.Phones.map((p) => p.Number).join(', ')}
							</div>
						)}
						{reference.Emails && reference.Emails.length > 0 && (
							<div>
								<strong class="mr-2">Email</strong>
								{reference.Emails.map((e) => e.Address).join(', ')}
							</div>
						)}
					</div>
				</div>
			)}
			{reference.Comments && reference.Comments.length > 0 && (
				<div>
					<button onClick$={() => toggle(`comments-${reference.Id}`)}>
						Comments
					</button>
					<div id={'comments-' + reference.Id} class="accordion-content">
						{reference.Comments.map((comment) => (
							<div key={comment.Id}>{comment.Message}</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
})
