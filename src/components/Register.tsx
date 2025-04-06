import { RefObject, useRef, useState } from "react";
import { emailAndPhoneNumberValidator, passwordValidator } from "../utils/validate";
import { UserCredential, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Footer from "./Footer";
import Header from "./Header";
import FAQues from "./FAQues";
import { auth } from "../utils/firebase";
import { BG_IMAGE } from "../utils/constants";

const Register = () => {
	const [errorMessage1, setErrorMessage1] = useState("");
	const [errorMessage2, setErrorMessage2] = useState("");
	const [message, setMessage] = useState("");

	const email1: string | RefObject<HTMLInputElement> = useRef(null as unknown as HTMLInputElement);
	const password1: string | RefObject<HTMLInputElement> = useRef(null as unknown as HTMLInputElement);
	const email2: string | RefObject<HTMLInputElement> = useRef(null as unknown as HTMLInputElement);
	const password2: string | RefObject<HTMLInputElement> = useRef(null as unknown as HTMLInputElement);

	const register = async (email: string, password: string) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password).then((userCredential: UserCredential) => {
				const user = userCredential.user; 
				updateProfile(user, {
				}).then(() => {
					setMessage("");
				}).catch((error) => {
					setMessage(error.code);
				});
			}).catch((error) => {
				if (error.code === 'auth/email-already-in-use') setMessage("User Exists!!!");
				else setMessage(error.code)
			})
			
		} catch (error) {
			setMessage(error as string);
		}
	}

	const registerFirst = async (): Promise<void> => {
		if (!emailAndPhoneNumberValidator(email1.current.value)) {
			setErrorMessage1("Invalid email address");
			return;
		}
		if (!passwordValidator(password1.current.value)) {
			setErrorMessage1("Invalid password");
			return;
		}

		setErrorMessage1("");
		setMessage("");
		register(email1.current.value, password1.current.value);
	}

	const registerSecond = (): void => {
		if (!emailAndPhoneNumberValidator(email2.current.value)) {
			setErrorMessage2("Invalid email address");
			return;
		}
		if (!passwordValidator(password2.current.value)) {
			setErrorMessage2("Invalid password");
			return;
		}

		setErrorMessage2("");
		setMessage("");
		register(email2.current.value, password2.current.value);
	}

	return (
		<div className="bg-red-950 h-full bg-linear-to-b from-black">
			<Header />

			<div
				style={{ backgroundImage: `url(${BG_IMAGE})` }}
				className="w-95/100 h-2/3 rounded-xl m-auto object-scale-down shadow-2xl"
			>
				<div className="w-6xl text-center m-auto p-15">
					<h1 className="text-white text-7xl font-extrabold mb-12">
						Unlimited movies, TV shows and more
					</h1>
					<h3 className="text-white text-2xl font-medium mb-8">
						Starts at ₹149. Cancel at any time.
					</h3>
					<h4 className="text-white text-base font-medium">
						Ready to watch? Enter your email to create or restart your
						membership.
					</h4>

					<form onSubmit={(e) => e.preventDefault()} className="flex text-white m-6 justify-center items-center">
						<div className="group relative flex">
							<input required type="email" id="email-first" name="email-first" className={"bg-neutral-500 mr-2 rounded-full w-80 pt-4 px-5 peer h-16 outline-offset-2 " + ((errorMessage1 === "Invalid email address") ? 'outline-2 outline-red-700' : 'focus:outline-2 outline-white')} ref={email1} />
							<label htmlFor="email-first" className="transform transition-all absolute pl-5 top-0 h-full flex items-center text-sm group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-0.5 peer-valid:text-xs peer-valid:h-1/2 peer-valid:-translate-y-0.5">Email address</label>

							<input required type="password" id="password-first" name="password-first" className={"bg-neutral-500 mr-2 rounded-full w-80 pt-4 px-5 peer h-16 outline-offset-2 " + ((errorMessage1 === "Invalid password") ? 'outline-2 outline-red-700' : 'focus:outline-2 outline-white')} ref={password1} />
							<label htmlFor="password-first" className="transform transition-all absolute pl-5 top-0 left-82 h-full flex items-center text-sm group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-0.5 peer-valid:text-xs peer-valid:h-1/2 peer-valid:-translate-y-0.5">Password</label>

							<button className="bg-red-700 focus:outline-2 outline-white outline-offset-2 px-12 py-4 rounded-full text-2xl font-semibold" onClick={registerFirst}>Get Started</button>
						</div>
					</form>
					<div className={(errorMessage1.length !== 0 || message.length !== 0) ? "text-white w-4xl p-2 m-auto rounded-full text-center bg-red-500" : "hidden"}>{errorMessage1 || message}</div>
				</div>
			</div>

			<div className="my-8 m-auto w-95/100">
				<h2 className="text-4xl my-6 text-white font-extrabold">Frequently Asked Questions</h2>
				<FAQues />
			</div>

			<div className="w-2/3 m-auto my-8">
				<h4 className="text-white text-base text-center font-medium mt-6 mb-3">
					Ready to watch? Enter your email to create or restart your
					membership.
				</h4>
				<form onSubmit={(e) => e.preventDefault()} className="flex m-6 text-white justify-center items-center">
					<div className="group relative flex">
						<input required type="email" name="email-second" id="email-second" className={"bg-neutral-500 mr-2 rounded-full w-80 pt-4 px-5 h-16 peer outline-offset-2 " + ((errorMessage2 === "Invalid email address") ? 'outline-2 outline-red-700' : 'focus:outline-2 outline-white')} ref={email2} />
						<label htmlFor="email-second" className="transform transition-all absolute pl-5 top-0 h-full flex items-center text-sm group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-0.5 peer-valid:text-xs peer-valid:h-1/2 peer-valid:-translate-y-0.5">Email address</label>

						<input required type="password" name="password-second" id="password-second" className={"bg-neutral-500 mr-2 rounded-full w-80 pt-4 px-5 h-16 peer outline-offset-2 " + ((errorMessage2 === "Invalid password") ? 'outline-2 outline-red-700' : 'focus:outline-2 outline-white')} ref={password2} />
						<label htmlFor="email-second" className="transform transition-all absolute pl-5 top-0 left-82 h-full flex items-center text-sm group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-0.5 peer-valid:text-xs peer-valid:h-1/2 peer-valid:-translate-y-0.5">Password</label>

						<button className="bg-red-700 focus:outline-2 outline-white outline-offset-2 px-12 py-4 rounded-full text-2xl font-semibold" onClick={registerSecond}>Get Started</button>
					</div>
				</form>
				<div className={(errorMessage2.length !== 0 || message.length !== 0) ? "text-white w-4xl p-2 m-auto rounded-full text-center bg-red-500" : "hidden"}>{errorMessage2 || message}</div>
			</div>

			<Footer />
		</div>
	);
};

export default Register;
