import { AppLayout, GuestLayout } from '@/components';
import { PATH } from '@/constants';
import { lazy } from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const Dashboard = lazy(() => import('@/views/Home'));
const Login = lazy(() => import('@/views/Login'));
const ForgotPassword = lazy(() => import('@/views/ForgotPassword'));
const NotFound = lazy(() => import('@/views/NotFound'));

const router = createBrowserRouter([
	{
		path: PATH.ROOT,
		element: <AppLayout />,
		children: [
			{
				path: PATH.ROOT,
				index: true,
				element: <Navigate to={PATH.DASHBOARD} replace />,
			},
			{
				path: PATH.DASHBOARD,
				element: <Dashboard />,
			},
		],
	},
	{
		path: PATH.ROOT,
		element: <GuestLayout />,
		children: [
			{
				path: PATH.LOGIN,
				element: <Login />,
			},
			{
				path: PATH.SET_NEW_PASSWORD,
				element: <ForgotPassword />,
			},
		],
	},
	{
		path: PATH.ANY,
		element: <NotFound />,
	},
]);

export default router;
