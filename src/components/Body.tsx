import { createBrowserRouter, RouterProvider } from 'react-router';
import Browse from './Browse';
import Register from './Register';
import SignIn from './SignIn';
import Error from './Error';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            Component: Register,
            ErrorBoundary: Error
        },
        {
            path: '/browse',
            Component: Browse
        },
        {
            path: '/login',
            Component: SignIn
        },
        {
            path: '/error',
            Component: Error
        }
    ])

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    );
}

export default Body;