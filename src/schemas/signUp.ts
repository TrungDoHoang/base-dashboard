import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
	name: Yup.string().required('This field is required'),
	email: Yup.string().required('This field is required').email('Invalid email'),
	password: Yup.string()
		.required('This field is required')
		.min(6, 'Password must be at least 6 characters'),
	rePassword: Yup.string()
		.required('This field is required')
		.min(6, 'Password must be at least 6 characters')
		.test('matching password', 'Password not matching', (value, context) => {
			const { password } = context.parent;
			if (password === value) return true;

			return false;
		}),
});

export const initValueSignUp = {
	name: '',
	email: '',
	password: '',
	rePassword: '',
};
