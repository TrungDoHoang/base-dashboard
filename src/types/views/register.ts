export interface registerPayload {
	id?: string;
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
}

export interface forgotPayload {
	email: string;
}

export interface setNewPasswordPayload {
	id?: string;
	newPassword: string;
	reNewPassword: string;
}
