import router from '@/app/routes.tsx';
import store from '@/app/store/index.ts';
import Loading from '@/components/Loading';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<Suspense fallback={<Loading />}>
				<MantineProvider>
					<RouterProvider router={router} />
				</MantineProvider>
			</Suspense>
		</Provider>
	</React.StrictMode>,
);
