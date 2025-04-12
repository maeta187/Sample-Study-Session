import { z } from 'zod'

export const formSchema = z.object({
	lastName: z
		.string()
		.nonempty('姓は必須です')
		.min(2, '姓は2文字以上で入力してください')
		.max(20, '姓は20文字以内で入力してください'),
	firstName: z
		.string()
		.nonempty('名は必須です')
		.min(2, '名は2文字以上で入力してください')
		.max(20, '名は20文字以内で入力してください'),
	email: z
		.string()
		.nonempty('メールアドレスは必須です')
		.email('有効なメールアドレスを入力してください'),
	gender: z
		.string()
		.nonempty('性別は必須です')
		.refine((value) => ['men', 'women', 'other'].includes(value), {
			message: '有効な性別を選択してください'
		}),
	// 定数を使用してより厳格なバリデーションを行う場合
	// gender: z.enum([GENDER.MEN, GENDER.WOMEN, GENDER.WOMEN], {
	// 	errorMap: () => ({ message: '性別は必須です' })
	// }),
	prefecture: z.string().nonempty('都道府県は必須です'),
	message: z.string().max(50, '備考は50文字以内で入力してください')
})
