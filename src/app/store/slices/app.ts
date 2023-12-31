import { TAppInitState } from '@/types/stores';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

const initialState: TAppInitState = {
	openSidebar: false,
};

const appSlice = createSlice({
	name: 'globalSate',
	initialState,
	reducers: {
		toggleSideBar: (state) => {
			state.openSidebar = !state.openSidebar;
		},
		updateSidebarState(state) {
			state.openSidebar = window.outerWidth > 768;
		},
	},
});

export const APP_SELECTOR = (state: RootState) => state.appStore;

export const { toggleSideBar, updateSidebarState } = appSlice.actions;

export default appSlice.reducer;
