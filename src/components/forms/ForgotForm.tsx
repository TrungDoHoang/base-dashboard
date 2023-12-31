import { PATH } from '@/constants';
import { SCREEN_MODE } from '@/constants/Login';
import {
	forgotPasswordSchema,
	initValueForgotPassword,
} from '@/schemas/forgot';
import { TSignInFormProps, forgotPayload } from '@/types/views';
import { Box, Button, Text, TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ForgotForm = (props: TSignInFormProps) => {
	const { onSwitchMode } = props;

	const form = useForm({
		initialValues: initValueForgotPassword,
		validate: yupResolver(forgotPasswordSchema),
	});

	const onSubmit = () => {
		const payload: forgotPayload = {
			email: form.values.email || '',
		};

		return payload;
	};
	return (
		<div
			className='flex flex-col justify-center items-center w-full h-full
    max-w-[700px] text-gray-800 gap-y-5'
		>
			<Helmet>
				<title>Request reset password</title>
				<meta name='description' content='Request reset password' />
			</Helmet>

			<h1 className='font-mono text-4xl text-purple-700/80 font-bold'>
				<Link to={PATH.ROOT}>Logo</Link>
			</h1>

			<Box
				component='form'
				className='stack gap-y-4 mx-auto w-[80%]'
				onSubmit={form.onSubmit(onSubmit)}
			>
				<TextInput
					label='Email Address'
					id='email'
					type='email'
					className='w-full'
					withAsterisk
					{...form.getInputProps('email')}
				/>

				<Text
					className='font-semibold cursor-pointer select-none hover:underline'
					onClick={() => onSwitchMode(SCREEN_MODE.SIGN_IN)}
				>
					Remember your password?
				</Text>

				<Button
					size='lg'
					fullWidth
					type='submit'
					className='bg-blue-600 hover:bg-blue-700 text-gray-100'
				>
					Submit
				</Button>
			</Box>
		</div>
	);
};

export default ForgotForm;
