'use client'
import { InputForm } from '@/app/form/_components/InputForm'
import type { FormData, Prefecture } from '@/types'
import { useState } from 'react'

type FormProps = {
	prefectures: Prefecture[]
}

// e.target.valueがString型であるため、全てString型
const initialFormData: FormData = {
	lastName: '',
	firstName: '',
	email: '',
	gender: '',
	prefecture: '',
	message: ''
}

export const Form = ({ prefectures }: FormProps) => {
	// 1つのStateで一元管理
	const [formData, setFormData] = useState<FormData>(initialFormData)

	// pendingの状態管理
	const [pending, setPending] = useState(false)

	// formDataStateの更新処理
	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value
		}))
	}

	// バリデーション処理

	// サブミット関数
	const handleSubmit = (e: React.FormEvent) => {
		// デフォルトのイベントをキャンセル
		e.preventDefault()
		// 送信中の状態にする
		setPending(true)
		setTimeout(() => {
			console.log('Form submitted:', formData)
			// 送信中の状態を解除
			setPending(false)
		}, 3000)
	}

	const handleReset = () => {
		// フォームデータを初期化
		setFormData(initialFormData)
	}

	return (
		<div className='mx-auto w-2xl rounded-lg bg-white p-6 shadow-2xl'>
			<h2 className='mb-6 text-center text-2xl font-bold text-gray-800'>
				コンタクトフォーム
			</h2>
			<InputForm
				formData={formData}
				prefectures={prefectures}
				pending={pending}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleReset={handleReset}
			/>
		</div>
	)
}
