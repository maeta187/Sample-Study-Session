import { GENDER } from '@/constants'
import { FormData, Prefecture } from '@/types'
import { FieldErrors, SubmitHandler, UseFormRegister } from 'react-hook-form'

type InputFormProps = {
	prefectures: Prefecture[]
	register: UseFormRegister<FormData>
	errors: FieldErrors<FormData>
	pending: boolean
	onSubmit: SubmitHandler<FormData>
	handleSubmit: (
		onValid: SubmitHandler<FormData>
	) => (e?: React.BaseSyntheticEvent) => Promise<void>
	handleReset: () => void
}

export const InputForm = ({
	prefectures,
	register,
	errors,
	pending,
	onSubmit,
	handleSubmit,
	handleReset
}: InputFormProps) => {
	console.log('フォームがレンダリングされました')
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
			{/* 姓 */}
			<div className='m-0'>
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
					className={`w-full rounded-md border ${errors?.lastName ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none`}
					placeholder='山田'
				/>
				<p className='mt-0.5 min-h-7 text-sm text-red-500'>
					{errors?.lastName?.message} {/* エラーメッセージの表示 */}
				</p>
			</div>

			{/* 名 */}
			<div className='m-0'>
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
					className={`w-full rounded-md border ${errors?.firstName ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none`}
					placeholder='太郎'
				/>
				<p className='mt-0.5 min-h-7 text-sm text-red-500'>
					{errors?.firstName?.message} {/* エラーメッセージの表示 */}
				</p>
			</div>

			{/* メールアドレス */}
			<div className='m-0'>
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
					className={`w-full rounded-md border ${errors?.email ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none`}
					placeholder='yamada@example.com'
				/>
				<p className='mt-0.5 min-h-7 text-sm text-red-500'>
					{errors?.email?.message} {/* エラーメッセージの表示 */}
				</p>
			</div>

			{/* 都道府県 */}
			<div className='m-0'>
				<label
					htmlFor='prefecture'
					className='mb-1 block text-sm font-medium text-gray-700'
				>
					都道府県
				</label>
				<select
					id='prefecture'
					{...register('prefecture')}
					className={`w-full rounded-md border ${errors?.prefecture ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none`}
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
				<p className='mt-0.5 min-h-7 text-sm text-red-500'>
					{errors?.prefecture?.message} {/* エラーメッセージの表示 */}
				</p>
			</div>

			{/* 性別 */}
			<div className='m-0 space-x-4'>
				<label className='mb-1 block text-sm font-medium text-gray-700'>
					性別
				</label>
				<label className='inline-flex items-center'>
					<input type='radio' value={GENDER.MEN} {...register('gender')} />
					<span className='ml-2'>男性</span>
				</label>
				<label className='inline-flex items-center'>
					<input type='radio' value={GENDER.WOMEN} {...register('gender')} />
					<span className='ml-2'>女性</span>
				</label>
				<label className='inline-flex items-center'>
					<input type='radio' value={GENDER.OTHER} {...register('gender')} />
					<span className='ml-2'>その他</span>
				</label>
				<p className='mt-0.5 min-h-7 text-sm text-red-500'>
					{errors?.gender?.message} {/* エラーメッセージの表示 */}
				</p>
			</div>

			{/* 備考 */}
			<div className='m-0'>
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
					className={`w-full rounded-md border ${errors?.message ? 'border-red-500' : 'border-gray-300'} px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none`}
					placeholder='ここにメッセージを入力してください'
				></textarea>
				<p className='mt-0.5 min-h-7 text-sm text-red-500'>
					{errors?.message?.message} {/* エラーメッセージの表示 */}
				</p>
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
