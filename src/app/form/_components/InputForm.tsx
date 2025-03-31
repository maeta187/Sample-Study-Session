import { GENDER } from '@/constants'
import { FormData, Prefecture } from '@/types'
import { SubmitHandler, UseFormRegister } from 'react-hook-form'

type InputFormProps = {
	prefectures: Prefecture[]
	register: UseFormRegister<FormData>
	pending: boolean
	onSubmit: SubmitHandler<FormData>
	handleSubmit: (
		onValid: SubmitHandler<FormData>
	) => (e?: React.BaseSyntheticEvent) => Promise<void>
	handleReset: () => void
}

export const InputForm = ({
	prefectures,
	pending,
	register,
	onSubmit,
	handleSubmit,
	handleReset
}: InputFormProps) => {
	console.log('フォームがレンダリングされました')
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
			{/* 姓 */}
			<div>
				<label
					htmlFor='last-name'
					className='mb-1 block text-sm font-medium text-gray-700'
				>
					姓
				</label>
				<input
					type='text'
					id='last-name'
					{...register('lastName')}
					className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none'
					placeholder='山田'
				/>
			</div>

			{/* 名 */}
			<div>
				<label
					htmlFor='first-name'
					className='mb-1 block text-sm font-medium text-gray-700'
				>
					名
				</label>
				<input
					type='text'
					id='first-name'
					{...register('firstName')}
					className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none'
					placeholder='太郎'
				/>
			</div>

			{/* メールアドレス */}
			<div>
				<label
					htmlFor='email'
					className='mb-1 block text-sm font-medium text-gray-700'
				>
					メールアドレス
				</label>
				<input
					type='email'
					id='email'
					{...register('email')}
					className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none'
					placeholder='yamada@example.com'
				/>
			</div>

			{/* 都道府県 */}
			<div>
				<label
					htmlFor='prefecture'
					className='mb-1 block text-sm font-medium text-gray-700'
				>
					都道府県
				</label>
				<select
					id='prefecture'
					{...register('prefecture')}
					className='w-full rounded-md border border-gray-300 bg-white px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none'
				>
					<option value={''} disabled>
						選択してください
					</option>
					{prefectures.map((prefecture) => (
						<option key={prefecture.code} value={prefecture.code}>
							{prefecture.name}
						</option>
					))}
				</select>
			</div>

			{/* 性別 */}
			<div className='space-x-4'>
				<label className='mb-1 block text-sm font-medium text-gray-700'>
					性別
				</label>
				<label className='inline-flex items-center'>
					<input
						type='radio'
						value={GENDER.MEN}
						{...register('gender')}
						className='form-radio text-blue-500'
					/>
					<span className='ml-2'>男性</span>
				</label>
				<label className='inline-flex items-center'>
					<input
						type='radio'
						value={GENDER.WOMEN}
						{...register('gender')}
						className='form-radio text-blue-500'
					/>
					<span className='ml-2'>女性</span>
				</label>
				<label className='inline-flex items-center'>
					<input
						type='radio'
						value={GENDER.OTHER}
						{...register('gender')}
						className='form-radio text-blue-500'
					/>
					<span className='ml-2'>その他</span>
				</label>
			</div>

			{/* 備考 */}
			<div>
				<label
					htmlFor='message'
					className='mb-1 block text-sm font-medium text-gray-700'
				>
					備考
				</label>
				<textarea
					id='message'
					{...register('message')}
					rows={4}
					className='w-full rounded-md border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none'
					placeholder='ここにメッセージを入力してください'
				></textarea>
			</div>

			<div className='flex justify-between'>
				<button
					type='button'
					className='w-2xs rounded-md border border-blue-600 bg-white px-4 py-2 text-blue-600 transition-colors hover:border-blue-700 hover:bg-gray-50 focus:ring-2'
					disabled={pending}
					onClick={handleReset}
				>
					リセット
				</button>
				<button
					type='submit'
					className={`w-2xs rounded-md ${pending ? 'opacity-50' : 'opacity-100'} bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 focus:ring-2`}
					disabled={pending}
				>
					{pending ? '送信中...' : '送信'}
				</button>
			</div>
		</form>
	)
}
