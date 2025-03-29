import { Form } from '@/app/form/_components/Form'
import { getPrefecture } from '@/app/form/actions'
import { NextResponse } from 'next/server'

export default async function Page() {
	const prefectures = await getPrefecture('prefecture')
	if (prefectures instanceof NextResponse) {
		const errorData = await prefectures.json()
		console.error(errorData.error)
		return
	}
	if (!prefectures) {
		console.error('Failed to fetch data')
		return
	}
	return (
		<div>
			<Form prefectures={prefectures} />
		</div>
	)
}
