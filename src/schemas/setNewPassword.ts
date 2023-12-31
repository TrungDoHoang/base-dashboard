import * as Yup from 'yup';

export const setNewPasswordSchema = Yup.object().shape({
	newPassword: Yup.string()
		.required('This field is required')
		.min(6, 'Password must be at least 6 characters'),
	reNewPassword: Yup.string()
		.required('This field is required')
		.min(6, 'Password must be at least 6 characters')
		.test('matching password', 'Password not matching', (value, context) => {
			const { newPassword } = context.parent;
			if (newPassword === value) return true;

			return false;
		}),
});

export const initValueSetNewPassword = {
	newPassword: '',
	reNewPassword: '',
};
