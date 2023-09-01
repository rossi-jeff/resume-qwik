import type { Address } from './address.type'
import type { FullName } from './full-name.type'

export type EmailType = 'Home' | 'Work'
export type PhoneType = 'Home' | 'Work' | 'Cell'
export type PreferedType = 'Phone' | 'Email'
export const EmailTypeOptions = ['Home', 'Work']
export const PhoneTypeOptions = ['Home', 'Work', 'Cell']
export const PrefferedTypeOptions = ['Email', 'Phone']

export type ContactType = {
	Name: FullName
	Address: Address
	Email: string
	EmailType: EmailType | string
	Phone: string
	PhoneType: PhoneType | string
	Preferred: PreferedType | string
	Subject: string
	Message: string
}

export const blankContact: ContactType = {
	Name: {
		Salutation: '',
		First: '',
		Middle: '',
		Last: '',
		Suffix: '',
	},
	Address: {
		Address: '',
		Suite: '',
		City: '',
		State: '',
		Zip: '',
	},
	Email: '',
	EmailType: 'Work',
	Phone: '',
	PhoneType: 'Work',
	Preferred: 'Email',
	Subject: '',
	Message: '',
}
