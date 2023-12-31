import { APP_SELECTOR, useAppSelector } from '@/app/store';
import { PATH } from '@/constants';
import {
	ChartBarIcon,
	ClipboardDocumentListIcon,
	HomeIcon,
	ListBulletIcon,
	UserGroupIcon,
	UsersIcon,
} from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
	const appState = useAppSelector(APP_SELECTOR);
	const { openSidebar } = appState;
	return (
		<div
			className={`min-w-[160px] w-[160px]  transition-all bg-indigo-700 text-white pt-2 pb-4 px-2 ${
				!openSidebar ? '-ml-[160px]' : ''
			}`}
		>
			<h1 className='font-mono text-4xl text-purple-700/80 font-bold text-center bg-slate-200 mb-3'>
				<Link to={PATH.ROOT}>Logo</Link>
			</h1>
			<NavLink
				to={PATH.DASHBOARD}
				className={(nav) =>
					'flex items-center p-2 rounded transition-colors hover:bg-black/30' +
					(nav.isActive ? ' bg-black/20' : '')
				}
			>
				<span className='mr-2 text-gray-300'>
					<HomeIcon className='w-5' />
				</span>
				<span className='text-xs'>Dashboard</span>
			</NavLink>
			<NavLink
				to={PATH.PRODUCTS}
				className={(nav) =>
					'flex items-center p-2 rounded transition-colors hover:bg-black/30' +
					(nav.isActive ? ' bg-black/20' : '')
				}
			>
				<span className='mr-2 text-gray-300'>
					<ListBulletIcon className='w-5' />
				</span>
				<span className='text-xs'>Products</span>
			</NavLink>
			<NavLink
				to={PATH.ORDERS}
				className={(nav) =>
					'flex items-center p-2 rounded transition-colors hover:bg-black/30' +
					(nav.isActive ? ' bg-black/20' : '')
				}
			>
				<span className='mr-2 text-gray-300'>
					<ClipboardDocumentListIcon className='w-5' />
				</span>
				<span className='text-xs'>Orders</span>
			</NavLink>
			<NavLink
				to={PATH.USERS}
				className={(nav) =>
					'flex items-center p-2 rounded transition-colors hover:bg-black/30' +
					(nav.isActive ? ' bg-black/20' : '')
				}
			>
				<span className='mr-2 text-gray-300'>
					<UsersIcon className='w-5' />
				</span>
				<span className='text-xs'>Users</span>
			</NavLink>
			<NavLink
				to={PATH.CUSTOMERS}
				className={(nav) =>
					'flex items-center p-2 rounded transition-colors hover:bg-black/30' +
					(nav.isActive ? ' bg-black/20' : '')
				}
			>
				<span className='mr-2 text-gray-300'>
					<UserGroupIcon className='w-5' />
				</span>
				<span className='text-xs'>Customers</span>
			</NavLink>
			<NavLink
				to={PATH.REPORTS}
				className={(nav) =>
					'flex items-center p-2 rounded transition-colors hover:bg-black/30' +
					(nav.isActive ? ' bg-black/20' : '')
				}
			>
				<span className='mr-2 text-gray-300'>
					<ChartBarIcon className='w-5' />
				</span>
				<span className='text-xs'>Reports</span>
			</NavLink>
		</div>
	);
};

export default Sidebar;
