import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
    const LOGO = new URL("../assets/header.png", import.meta.url).toString();
    const navigate = useNavigate();
    const user = useSelector((store: any) => store.user);
    const dispatch = useDispatch();
    const url = useLocation();

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch(() => {
            navigate("/error");
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(addUser({ uid: user.uid, email: user.email }));
                navigate('/browse');
            }
            else {
                dispatch(removeUser());
                if(url.pathname === '/login') navigate('/login');
                else navigate('/');
            }
        })
        return () => unsubscribe();
    }, []);

    return (
        <div className={"w-screen z-10 px-9 flex justify-between items-center" + (user === null ? "" : " absolute")}>
            <img className="w-56" src={LOGO} alt="logo" />
            {
                user ? (<button onClick={handleSignOut} tabIndex={0} className='text-sm text-black font-semibold cursor-pointer bg-white focus:outline-2 outline-white outline-offset-2 h-min px-4 py-1.5 rounded-full'>Sign out</button>) :
                    (url.pathname === '/login'  ? <div></div> : <NavLink to="./login" tabIndex={0} className='text-sm text-black font-semibold cursor-pointer bg-white focus:outline-2 outline-white outline-offset-2 h-min px-4 py-1.5 rounded-full'>Sign In</NavLink>)
            }
        </div>
    );
}

export default Header;