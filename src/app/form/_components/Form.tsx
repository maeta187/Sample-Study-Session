'use client'
import { InputForm } from '@/app/form/_components/InputForm'
import { formSchema } from '@/schemas'
import type { FormData, Prefecture } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

type FormProps = {
	prefectures: Prefecture[]
}

const defaultValues: FormData = {
	lastName: '',
	firstName: '',
	email: '',
	gender: '',
	prefecture: '',
	message: ''
}

export const Form = ({ prefectures }: FormProps) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting, errors }
	} = useForm<FormData>({
		defaultValues,
		resolver: zodResolver(formSchema)
	})

	// サブミット関数
	const onSubmit: SubmitHandler<FormData> = async (data) => {
		await new Promise((resolve) =>
			setTimeout(() => {
				console.log('Form submitted:', data)
				resolve('Success')
			}, 3000)
		)
	}

	const handleReset = () => {
		reset()
	}

	return (
		<div className='mx-auto w-2xl rounded-lg bg-white p-6 shadow-2xl'>
			<h2 className='mb-6 text-center text-2xl font-bold text-gray-800'>
				コンタクトフォーム
			</h2>
			<InputForm
				prefectures={prefectures}
				register={register}
				errors={errors}
				pending={isSubmitting}
				onSubmit={onSubmit}
				handleSubmit={handleSubmit}
				handleReset={handleReset}
			/>
		</div>
	)
}
