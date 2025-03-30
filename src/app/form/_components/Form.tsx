'use client'
import { InputForm } from '@/app/form/_components/InputForm'
import type { FormData, Prefecture } from '@/types'
import { useState } from 'react'

type FormProps = {
	prefectures: Prefecture[]
}

const initialFormData: FormData = {
	lastName: '',
	firstName: '',
	email: '',
	sex: '',
	prefecture: '',
	message: ''
}

export const Form = ({ prefectures }: FormProps) => {
	// e.target.valueがString型であるため、全てString型
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
		e.preventDefault()
		setPending(true)
		setTimeout(() => {
			console.log('Form submitted:', formData)
			setPending(false)
		}, 3000)
	}

	const handleReset = () => {
		setFormData(initialFormData)
	}

	return (
		<div>
			<h2>コンタクトフォーム</h2>
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
