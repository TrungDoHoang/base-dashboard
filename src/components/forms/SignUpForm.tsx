import { PATH } from '@/constants';
import { SCREEN_MODE } from '@/constants/Login';
import { initValueSignUp, signUpSchema } from '@/schemas/signUp';
import { TSignUpFormProps, registerPayload } from '@/types/views';
import { Box, Button, PasswordInput, Text, TextInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const SignUpForm = (props: TSignUpFormProps) => {
	const { onSwitchMode } = props;

	const form = useForm({
		initialValues: initValueSignUp,
		validate: yupResolver(signUpSchema),
	});

	const onSubmit = () => {
		const payload: registerPayload = {
			email: form.values.email || '',
			name: form.values.name || '',
			password: form.values.password || '',
			password_confirmation: form.values.rePassword || '',
		};
		return payload;
	};
	return (
		<div
			className='flex flex-col justify-center items-center w-full h-full
    max-w-[700px] text-gray-800 gap-y-5'
		>
			<Helmet>
				<title>Register a new account</title>
				<meta name='description' content='Register a new account' />
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
					label='Name'
					id='name'
					type='text'
					className='w-full'
					withAsterisk
					{...form.getInputProps('name')}
				/>
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
				<PasswordInput
					label='Password Confirm'
					className='w-full'
					id='rePassword'
					withAsterisk
					{...form.getInputProps('rePassword')}
				/>

				<Button
					size='lg'
					fullWidth
					type='submit'
					className='bg-blue-600 hover:bg-blue-700 text-gray-100'
				>
					Sign in
				</Button>

				<div className='flex gap-x-2'>
					<Text className=''>Already have an account?</Text>
					<Text
						className='font-semibold cursor-pointer select-none hover:underline'
						onClick={() => onSwitchMode(SCREEN_MODE.SIGN_IN)}
					>
						Sign in now
					</Text>
				</div>
			</Box>
		</div>
	);
};

export default SignUpForm;
