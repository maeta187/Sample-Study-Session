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
		<form onSubmit={handleSubmit}>
			{/* 姓 */}
			<div>
				<label htmlFor='last-name'>姓</label>
				<input
					type='text'
					id='last-name'
					name='lastName'
					value={formData.lastName}
					onChange={handleChange}
					placeholder='山田'
				/>
			</div>

			{/* 名 */}
			<div>
				<label htmlFor='first-name'>名</label>
				<input
					type='text'
					id='first-name'
					name='firstName'
					value={formData.firstName}
					onChange={handleChange}
					placeholder='太郎'
				/>
			</div>

			{/* メールアドレス */}
			<div>
				<label htmlFor='email'>メールアドレス</label>
				<input
					type='email'
					id='email'
					name='email'
					value={formData.email}
					onChange={handleChange}
					placeholder='yamada@example.com'
				/>
			</div>

			{/* 都道府県 */}
			<div>
				<label htmlFor='prefecture'>都道府県</label>
				<select
					id='prefecture'
					name='prefecture'
					value={formData.prefecture}
					onChange={handleChange}
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
			<div>
				<label>性別</label>
				<label>
					<input
						type='radio'
						name='sex'
						value='men'
						checked={formData.sex === 'men'}
						onChange={handleChange}
					/>
					<span>男性</span>
				</label>
				<label>
					<input
						type='radio'
						name='sex'
						value='woman'
						checked={formData.sex === 'woman'}
						onChange={handleChange}
					/>
					<span>女性</span>
				</label>
				<label>
					<input
						type='radio'
						name='sex'
						value='other'
						checked={formData.sex === 'other'}
						onChange={handleChange}
					/>
					<span>その他</span>
				</label>
			</div>

			{/* 備考 */}
			<div>
				<label htmlFor='message'>備考</label>
				<textarea
					id='message'
					name='message'
					value={formData.message}
					onChange={handleChange}
					rows={4}
					placeholder='ここにメッセージを入力してください'
				></textarea>
			</div>

			<div>
				<button type='button' disabled={pending} onClick={handleReset}>
					リセット
				</button>
				<button type='submit' disabled={pending}>
					{pending ? '送信中...' : '送信'}
				</button>
			</div>
		</form>
	)
}
