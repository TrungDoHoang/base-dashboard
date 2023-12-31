import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
	email: Yup.string().required('This field is required').email('Invalid email'),
	password: Yup.string()
		.required('This field is required')
		.min(6, 'Password must be at least 6 characters'),
});

export const initValueLogin = {
	email: '',
	password: '',
	rememberMe: false,
};
