import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { auth } from "../utils/firebase";

const Header = () => {
    const logo = new URL("../assets/header.png", import.meta.url).toString();
    const navigate = useNavigate();
    const user = useSelector((store: any) => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch(() => {
            navigate("/error");
        })
    }

    return (
        <div className="w-full px-9 pt-2 flex justify-between items-center">
            <img className="w-45" src={logo} alt="logo" />
            {
                user ? (<button onClick={handleSignOut} tabIndex={0} className='text-sm text-black font-semibold cursor-pointer bg-white focus:outline-2 outline-white outline-offset-2 h-min px-4 py-1.5 rounded-full'>Sign out</button>) :
                (<NavLink to="./login" tabIndex={0} className='text-sm text-black font-semibold cursor-pointer bg-white focus:outline-2 outline-white outline-offset-2 h-min px-4 py-1.5 rounded-full'>Sign In</NavLink>)
            }
        </div>
    );
}

export default Header;