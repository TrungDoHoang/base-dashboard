import * as Yup from 'yup';

export const forgotPasswordSchema = Yup.object().shape({
	email: Yup.string().required('This field is required').email('Invalid email'),
});

export const initValueForgotPassword = {
	email: '',
};
