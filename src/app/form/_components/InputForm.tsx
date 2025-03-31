import { FormData, Prefecture } from '@/types'

type InputFormProps = {
	formData: FormData
	prefectures: Prefecture[]
	pending: boolean
	handleChange: (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => void
	handleSubmit: (e: React.FormEvent) => void
	handleReset: () => void
}

export const InputForm = ({
	formData,
	prefectures,
	pending,
	handleChange,
	handleSubmit,
	handleReset
}: InputFormProps) => {
	return (
		<form onSubmit={handleSubmit} className='space-y-4'>
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
					name='lastName'
					value={formData.lastName}
					onChange={handleChange}
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
					name='firstName'
					value={formData.firstName}
					onChange={handleChange}
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
					name='email'
					value={formData.email}
					onChange={handleChange}
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
					name='prefecture'
					value={formData.prefecture}
					onChange={handleChange}
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
						name='gender'
						value='men'
						checked={formData.gender === 'men'}
						onChange={handleChange}
						className='form-radio text-blue-500'
					/>
					<span className='ml-2'>男性</span>
				</label>
				<label className='inline-flex items-center'>
					<input
						type='radio'
						name='gender'
						value='woman'
						checked={formData.gender === 'woman'}
						onChange={handleChange}
						className='form-radio text-blue-500'
					/>
					<span className='ml-2'>女性</span>
				</label>
				<label className='inline-flex items-center'>
					<input
						type='radio'
						name='gender'
						value='other'
						checked={formData.gender === 'other'}
						onChange={handleChange}
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
					name='message'
					value={formData.message}
					onChange={handleChange}
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
