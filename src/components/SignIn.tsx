import { RefObject, useRef, useState } from 'react';
import { NavLink } from 'react-router';
import { emailAndPhoneNumberValidator, passwordValidator } from '../utils/validate';
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from '../utils/firebase';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { LANGUAGE_TRANSLATIONS } from '../utils/i18n';

const SignIn = () => {
    const BG_IMAGE = new URL(
        "../assets/background-image.jpg",
        import.meta.url
    ).toString();

    const langCode = useSelector((store: any) => store.config.lang);
    const [errorMessage, setErrorMessage] = useState("");
    const [message, setMessage] = useState("");
    const email: string | RefObject<HTMLInputElement> = useRef(null as unknown as HTMLInputElement);
    const password: string | RefObject<HTMLInputElement> = useRef(null as unknown as HTMLInputElement);

    const signIn = async () => {
        if(!emailAndPhoneNumberValidator(email.current.value)) {
            setErrorMessage("Invalid email address");
            return;
        }
        if(!passwordValidator(password.current.value)) {
            setErrorMessage("Invalid password");
            return;
        }
        
        setMessage("");
        setErrorMessage("");

        await signInWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential: UserCredential) => {
        }).catch((error) => {
            if (error.code === 'auth/invalid-credential') setMessage("Invalid credentials!");
            else setMessage(error.code)
        })
    }

    return (
        <>
            <Header />
            <div style={{ backgroundImage: `url(${BG_IMAGE})` }} className="h-100 lg:h-150 lg:px-9 pt-4 w-95/100 m-auto rounded-xl object-scale-down">
                <div className="text-white bg-black opacity-80 shadow-2xl w-3/4 p-4 sm:w-1/2 lg:w-2/6 lg:p-10 m-auto rounded-xl">
                    <h1 className="text-lg lg:text-4xl font-bold mb-2 lg:mb-6">{LANGUAGE_TRANSLATIONS[langCode].SignIn}</h1>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input required type="email" id='email' name='email' placeholder={LANGUAGE_TRANSLATIONS[langCode].Email} className={'px-2 h-12 lg:px-5 lg:h-16 text-sm mb-2 lg:text-lg w-full border-2 rounded-sm outline-0 ' + (errorMessage.length !== 0 ? 'border-red-700' : 'border-neutral-400 focus:border-white') } ref={email} />
                        <input required type="password" id='password' name='password' placeholder={LANGUAGE_TRANSLATIONS[langCode].Password} className={'px-2 h-12 lg:px-5 lg:h-16 text-sm mb-2 lg:text-lg w-full border-2 rounded-sm outline-0 ' + (errorMessage.length !== 0 ? 'border-red-700' : 'border-neutral-400 focus:border-white' )} ref={password} />
                        <button className='h-12 lg:h-16 w-full bg-red-700 flex items-center justify-center rounded-sm shadow-xl focus:outline-2 outline-white outline-offset-1 font-bold active:scale-95 text-sm sm:text-lg lg:text-xl' onClick={signIn}>{LANGUAGE_TRANSLATIONS[langCode].SignIn}</button>
                    </form>

                    <div className={(errorMessage.length !== 0 || message.length !== 0) ? "text-white p-1 sm:p-2 m-auto mt-2 sm:mt-4 rounded-full text-center bg-red-500" : "hidden"}>{errorMessage || message}</div>

                    <p className='mt-9 text-sm sm:text-lg lg:text-xl'>{LANGUAGE_TRANSLATIONS[langCode].NewToNetflix} <NavLink to="/" tabIndex={0} className={ isActive => 'font-bold focus:outline-2 outline-white outline-offset-2 hover:underline focus:underline hover:underline-offset-2'}>{LANGUAGE_TRANSLATIONS[langCode].SignUpNow}</NavLink></p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SignIn;