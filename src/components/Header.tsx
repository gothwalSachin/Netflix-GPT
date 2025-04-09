import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
import { LANGUAGE_TRANSLATIONS } from "../utils/i18n";

const Header = () => {
    const LOGO = new URL("../assets/header.png", import.meta.url).toString();
    const navigate = useNavigate();
    const user = useSelector((store: any) => store.user);
    const langCode = useSelector((store: any) => store.config.lang);
    const showGptSearch = useSelector((store: any) => store.gpt.showGptSearch);
    const dispatch = useDispatch();
    const url = useLocation();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
            .catch(() => {
                navigate("/error");
            });
    };

    const onToggleGptSearch = () => {
        dispatch(toggleGptSearchView());
    }

    const onLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeLanguage(e.target.value));
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(addUser({ uid: user.uid, email: user.email }));
                navigate("/browse");
            } else {
                dispatch(removeUser());
                if (url.pathname === "/login") navigate("/login");
                else navigate("/");
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div
            className={
                "w-screen z-10 px-9 flex justify-between items-center" +
                (user === null ? "" : " absolute")
            }
        >
            <img className="w-56" src={LOGO} alt="logo" />
            <div className="flex">
                <select name="Language selection" onSubmit={(e) => e.preventDefault()} onChange={onLanguageChange} className="text-sm text-white font-semibold cursor-pointer bg-transparent border-r-8 border-transparent outline-2 outline-white focus:outline-offset-2 w-min px-2 py-1.5 h-8 rounded-full me-4 active:scale-95">
                    {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>
                    {LANGUAGE_TRANSLATIONS[langCode][lang.name]}</option>)}</select>
                {user ? (
                    <>
                        <button className="text-sm text-black font-semibold cursor-pointer bg-white focus:outline-2 outline-white outline-offset-2 h-min px-4 py-1.5 rounded-full me-4 active:scale-95" onClick={onToggleGptSearch}>{showGptSearch ? LANGUAGE_TRANSLATIONS[langCode].GptHomepage : LANGUAGE_TRANSLATIONS[langCode].GptSearch}</button>
                        <button
                            onClick={handleSignOut}
                            tabIndex={0}
                            className="text-sm text-black font-semibold cursor-pointer bg-white focus:outline-2 outline-white outline-offset-2 h-min px-4 py-1.5 rounded-full active:scale-95">
                            {LANGUAGE_TRANSLATIONS[langCode].SignOut}
                        </button>
                    </>
                ) : url.pathname === "/login" ? (
                    <div></div>
                ) : (
                    <NavLink
                        to="./login"
                        tabIndex={0}
                        className="text-sm text-black font-semibold cursor-pointer bg-white focus:outline-2 outline-white outline-offset-2 h-min px-4 py-1.5 rounded-full active:scale-95"
                    >
                        {LANGUAGE_TRANSLATIONS[langCode].SignIn}
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Header;
