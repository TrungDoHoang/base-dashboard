import { SCREEN_MODE } from '@/constants/Login';

export interface loginPayload {
	email: string;
	password: string;
	rememberMe: boolean;
}
export type TModeLogin = (typeof SCREEN_MODE)[keyof typeof SCREEN_MODE];

export type TSignInFormProps = {
	onSwitchMode: (mode: TModeLogin) => void;
};
export type TSignUpFormProps = TSignInFormProps;
