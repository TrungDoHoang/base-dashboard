import { useAppSelector } from '@/app/store';
import { USER_SELECTOR } from '@/app/store/slices/user';
import { PATH } from '@/constants';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const GuestLayout = () => {
	const currentUser = useAppSelector(USER_SELECTOR);
	const nav = useNavigate();

	useEffect(() => {
		if (currentUser.token) {
			nav(PATH.ROOT, { replace: true });
		}
	});
	return (
		<div>
			<Outlet />
		</div>
	);
};

export default GuestLayout;
