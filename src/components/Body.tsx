import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router';
import Browse from './Browse';
import Register from './Register';
import SignIn from './SignIn';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import Error from './Error';

const Body = () => {
    const dispatch = useDispatch();

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
            path: '/error',
            Component: Error
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) dispatch(addUser({ uid: user.uid, email: user.email}));
            else dispatch(removeUser());
        })
    }, []);

    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    );
}

export default Body;