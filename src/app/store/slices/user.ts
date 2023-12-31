import { TUserState } from '@/types/stores';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

const initialState: TUserState = {
	token: 'abc',
	data: {
		id: '1',
		name: 'Trung Hoàng',
	},
};

const userSlice = createSlice({
	name: 'currentUser',
	initialState,
	reducers: {},
});

export const USER_SELECTOR = (state: RootState) => state.userStore;

export const {} = userSlice.actions;

export default userSlice.reducer;
