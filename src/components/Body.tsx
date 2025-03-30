import { createBrowserRouter, RouterProvider } from 'react-router';
import Login from './Login';
import Browse from './Browse';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            Component: Login
        },
        {
            path: '/browse',
            Component: Browse
        }
    ])

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    );
}

export default Body;