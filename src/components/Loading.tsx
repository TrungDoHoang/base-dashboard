import { TLoadingProps } from '@/types/components';
import { Text } from '@mantine/core';

const Loading = (props: TLoadingProps) => {
	const { text } = props;
	return (
		<div className='w-full h-[100vh] flex justify-center items-center'>
			<div className='rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute'></div>
			{text && (
				<Text className='absolute top-[calc(50%_+_40px)] max-h-[70%]'>
					{text}
				</Text>
			)}
		</div>
	);
};

export default Loading;
