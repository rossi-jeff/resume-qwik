export type SalutationType = 'Mr' | 'Mrs' | 'Ms' | 'Dr' | 'Miss'
export const SalutationTypeOptions = ['Mr', 'Mrs', 'Ms', 'Dr', 'Miss']

export type FullName = {
	Salutation?: SalutationType
	First?: string
	Middle?: string
	Last?: string
	Suffix?: string
}
