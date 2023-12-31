import { PATH } from '@/constants';
import { SCREEN_MODE } from '@/constants/Login';
import { initValueLogin, loginSchema } from '@/schemas/login';
import { TSignInFormProps, loginPayload } from '@/types/views';
import {
	Box,
	Button,
	Checkbox,
	PasswordInput,
	Text,
	TextInput,
} from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const SignInForm = (props: TSignInFormProps) => {
	const { onSwitchMode } = props;

	const form = useForm({
		initialValues: initValueLogin,
		validate: yupResolver(loginSchema),
	});

	const onSubmit = () => {
		const payload: loginPayload = {
			email: form.values.email || '',
			password: form.values.password || '',
			rememberMe: form.values.rememberMe || false,
		};

		return payload;
	};
	return (
		<div
			className='flex flex-col justify-center items-center w-full h-full
    max-w-[700px] text-gray-800 gap-y-5'
		>
			<Helmet>
				<title>Login to your account</title>
				<meta name='description' content='Login to your account' />
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
				<PasswordInput
					label='Password'
					className='w-full '
					id='password'
					withAsterisk
					{...form.getInputProps('password')}
				/>

				<Box className='flex justify-between align-items-center'>
					<Checkbox
						label='Remember me'
						{...form.getInputProps('rememberMe', { type: 'checkbox' })}
					/>

					<Text
						className='font-semibold cursor-pointer select-none hover:underline'
						onClick={() => onSwitchMode(SCREEN_MODE.FORGOT)}
					>
						Forgot your password?
					</Text>
				</Box>

				<Button
					size='lg'
					fullWidth
					type='submit'
					className='bg-blue-600 hover:bg-blue-700 text-gray-100'
				>
					Sign in
				</Button>

				<div className='flex gap-x-2'>
					<Text className=''>Don't have an account?</Text>
					<Text
						className='font-semibold cursor-pointer select-none hover:underline'
						onClick={() => onSwitchMode(SCREEN_MODE.SIGN_UP)}
					>
						Sign up now
					</Text>
				</div>
			</Box>
		</div>
	);
};

export default SignInForm;
