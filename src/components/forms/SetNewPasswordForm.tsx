import { PATH } from '@/constants';
import {
	initValueSetNewPassword,
	setNewPasswordSchema,
} from '@/schemas/setNewPassword';
import { setNewPasswordPayload } from '@/types/views';
import { Box, Button, PasswordInput } from '@mantine/core';
import { useForm, yupResolver } from '@mantine/form';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const SetNewPasswordForm = () => {
	const form = useForm({
		initialValues: initValueSetNewPassword,
		validate: yupResolver(setNewPasswordSchema),
	});

	const onSubmit = () => {
		const payload: setNewPasswordPayload = {
			newPassword: form.values.newPassword || '',
			reNewPassword: form.values.reNewPassword || '',
		};
		return payload;
	};
	return (
		<div
			className='flex flex-col justify-center items-center w-full h-full
    max-w-[500px] text-gray-800 gap-y-5'
		>
			<Helmet>
				<title>Set your new password</title>
				<meta name='description' content='Set your new password' />
			</Helmet>

			<h1 className='font-mono text-4xl text-purple-700/80 font-bold'>
				<Link to={PATH.ROOT}>Logo</Link>
			</h1>

			<h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
				Set New Password
			</h2>

			<Box
				component='form'
				className='stack gap-y-4 mx-auto w-[80%]'
				onSubmit={form.onSubmit(onSubmit)}
			>
				<PasswordInput
					label='New Password'
					className='w-full '
					id='password'
					withAsterisk
					{...form.getInputProps('newPassword')}
				/>
				<PasswordInput
					label='Repeat Password'
					className='w-full'
					id='rePassword'
					withAsterisk
					{...form.getInputProps('reNewPassword')}
				/>

				<Link
					className='font-semibold cursor-pointer select-none hover:underline'
					to={PATH.LOGIN}
				>
					Go back to Login
				</Link>

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

export default SetNewPasswordForm;
