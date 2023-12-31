import {
	updateSidebarState,
	useAppDispatch,
	useAppSelector,
} from '@/app/store';
import { USER_SELECTOR } from '@/app/store/slices/user';
import { PATH } from '@/constants';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar, Sidebar } from '..';
import Loading from '../Loading';

const AppLayout = () => {
	const currentUser = useAppSelector(USER_SELECTOR);
	const dispatch = useAppDispatch();
	const nav = useNavigate();

	const updateSidebar = () => {
		dispatch(updateSidebarState());
	};

	useEffect(() => {
		if (!currentUser.token) {
			nav(PATH.LOGIN, { replace: true });
		}
	});

	useEffect(() => {
		updateSidebar();
		window.addEventListener('resize', updateSidebar);
		return () => {
			window.removeEventListener('resize', updateSidebar);
		};
	}, []);

	return currentUser.data.id ? (
		<div className='min-h-full bg-gray-200 flex'>
			{/* Sidebar */}
			<Sidebar />
			{/* Sidebar */}

			<div className='flex-1 flex flex-col'>
				<Navbar />
				{/* Content */}
				<main className='p-6 flex-1'>
					<Outlet />
				</main>
				{/* Content */}
			</div>
		</div>
	) : (
		<>
			<div className='min-h-full bg-gray-200 flex items-center justify-center'>
				<Loading />
			</div>
		</>
	);
};

export default AppLayout;
