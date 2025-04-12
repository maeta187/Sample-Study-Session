import { formSchema } from '@/schemas'
import { z } from 'zod'

export type Prefecture = {
	code: number
	name: string
}

export type Gender = {
	MEN: 'men'
	WOMEN: 'women'
	OTHER: 'other'
}

export type FormData = z.infer<typeof formSchema>
