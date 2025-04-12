'use server'
import { Prefecture } from '@/types'
import { NextResponse } from 'next/server'

const END_POINT = process.env.END_POINT
const API_KEY = process.env.API_KEY

const query = `
query {
  prefecture {
    code
    name
  }
}
`

export async function getPrefecture(queryName: string) {
	if (!END_POINT || !API_KEY) {
		return NextResponse.json(
			{ error: 'END_POINT or API_KEY is not defined' },
			{ status: 500 }
		)
	}

	try {
		const response = await fetch(END_POINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				apikey: API_KEY
			},
			body: JSON.stringify({ query })
		})

		// レスポンスが正常でない場合はエラーをスロー
		if (!response.ok) {
			return NextResponse.json(
				{ error: `Failed to fetch data: ${response.statusText}` },
				{ status: response.status }
			)
		}

		// レスポンスをJSON形式で取得
		const data = await response.json()
		return Object.values(data.data[queryName]).map((v) => v) as Prefecture[]
	} catch (error) {
		if (error instanceof Error) {
			console.error(error.message)
		}
	}
}
