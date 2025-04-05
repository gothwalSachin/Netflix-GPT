import { createBrowserRouter, RouterProvider } from 'react-router';
import Browse from './Browse';
import Register from './Register';
import SignIn from './SignIn';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            Component: Register
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