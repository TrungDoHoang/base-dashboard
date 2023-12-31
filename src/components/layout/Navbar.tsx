import { toggleSideBar, useAppDispatch, useAppSelector } from '@/app/store';
import { USER_SELECTOR } from '@/app/store/slices/user';
import {
	ArrowLeftEndOnRectangleIcon,
	Bars3Icon,
	ChevronDownIcon,
	Cog8ToothIcon,
} from '@heroicons/react/24/outline';
import { Avatar, Button, Menu, Text } from '@mantine/core';

const Navbar = () => {
	const currentUser = useAppSelector(USER_SELECTOR);
	const userInf = currentUser.data;
	const dispatch = useAppDispatch();
	return (
		<header className='flex justify-between items-center p-3 h-14 shadow bg-white'>
			<button
				onClick={() => dispatch(toggleSideBar())}
				className='flex items-center justify-center rounded transition-colors w-8 h-8 text-gray-700 hover:bg-black/10'
			>
				<Bars3Icon className='w-6' />
			</button>
			<Menu shadow='md' width={200}>
				<Menu.Target>
					<Button className='flex items-center'>
						<Avatar
							size={34}
							src='https://randomuser.me/api/portraits/men/1.jpg'
							className='rounded-full w-8 mr-2'
						/>
						<Text className='font-semibold text-black'>{userInf.name}</Text>
						<ChevronDownIcon
							className='h-5 w-5 text-violet-200 hover:text-violet-100'
							aria-hidden='true'
						/>
					</Button>
				</Menu.Target>

				<Menu.Dropdown>
					<Menu.Item leftSection={<Cog8ToothIcon className='h-5 w-5' />}>
						Profile
					</Menu.Item>

					<Menu.Divider />

					<Menu.Item
						color='red'
						leftSection={<ArrowLeftEndOnRectangleIcon className='h-5 w-5' />}
					>
						Logout
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</header>
	);
};

export default Navbar;
