import { RefObject, useRef, useState } from 'react';
import { NavLink } from 'react-router';
import { emailAndPhoneNumberValidator, passwordValidator } from '../utils/validate';
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from '../utils/firebase';
import Header from './Header';

const SignIn = () => {
    const bg = new URL(
        "../assets/background-image.jpg",
        import.meta.url
    ).toString();

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
            <div style={{ backgroundImage: `url(${bg})` }} className="h-150 px-9 pt-2 w-95/100 m-auto rounded-xl object-scale-down">
                <div className="text-white bg-black opacity-80 shadow-2xl w-2/6 p-12 m-auto rounded-sm">
                    <h1 className="text-4xl font-bold my-6">Sign In</h1>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className='group relative mb-3'>
                            <input required type="email" id='email' name='email' className={'px-5 pt-4 h-16 w-full border-2 rounded-sm outline-0 peer ' + (errorMessage.length !== 0 ? 'border-red-700' : 'border-neutral-400 focus:border-white') } ref={email} />
                            <label htmlFor="email" className='transform transition-all absolute pl-5 top-0 h-full flex items-center text-sm group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-0.5 group-focus-within:pt-0.5 peer-valid:text-xs peer-valid:h-1/2 peer-valid:-translate-y-0.5 peer-valid:pt-0.5'>Email address</label>
                        </div>
                        <div className='group relative mb-3'>
                            <input required type="password" id='password' name='password' className={'px-5 pt-4 h-16 w-full border-2 rounded-sm outline-0 peer ' + (errorMessage.length !== 0 ? 'border-red-700' : 'border-neutral-400 focus:border-white' )} ref={password} />
                            <label htmlFor="password" className='transform transition-all absolute pl-5 top-0 h-full flex items-center text-sm group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-0.5 group-focus-within:pt-0.5 peer-valid:text-xs peer-valid:h-1/2 peer-valid:-translate-y-0.5 peer-valid:pt-0.5'>Password</label>
                        </div>
                        <button className='p-5 h-13 w-full bg-red-700 flex items-center justify-center rounded-sm shadow-xl focus:outline-2 outline-white outline-offset-2' onClick={signIn}>Sign In</button>
                    </form>

                    <div className={(errorMessage.length !== 0 || message.length !== 0) ? "text-white p-2 m-auto mt-4 rounded-full text-center bg-red-500" : "hidden"}>{errorMessage || message}</div>

                    <p className='mt-9'>New to Netflix? <NavLink to="/" tabIndex={0} className={ isActive => 'font-bold focus:outline-2 outline-white outline-offset-2 hover:underline focus:underline hover:underline-offset-2'}>Sign up now.</NavLink></p>
                </div>
            </div>
            <div className="w-7/10 my-9 m-auto">
                <p className="ml-2 mb-5 text-white">Questions? Call <a tabIndex={0} className="focus:underline focus:outline-0" href="tel:9821738442">9821738442</a></p>

                <div className="text-gray-200 grid gap-2 grid-cols-4 m-2">
                    <p>FAQ</p>
                    <p>Cookie Preferences</p>
                    <p>Help Centre</p>
                    <p>Corporate Information</p>
                    <p>Terms of Use</p>
                    <p>Privacy</p>
                </div>
            </div>
        </>
    );
}

export default SignIn;