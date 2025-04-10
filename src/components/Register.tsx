import { RefObject, useRef, useState } from "react";
import { emailAndPhoneNumberValidator, passwordValidator } from "../utils/validate";
import { UserCredential, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Footer from "./Footer";
import Header from "./Header";
import FAQues from "./FAQues";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { LANGUAGE_TRANSLATIONS } from "../utils/i18n";

const Register = () => {
	const BG_IMAGE = new URL(
		"../assets/background-image.jpg",
		import.meta.url
	).toString();
	const langCode = useSelector((store: any) => store.config.lang);
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
				<div className="w-95/100 text-center m-auto p-9 sm:p-11 lg:p-15">
					<h1 className="text-white text-2xl sm:text-4xl lg:text-7xl font-extrabold mb-12">{LANGUAGE_TRANSLATIONS[langCode].UnlimitedMovies}</h1>
					<h3 className="text-white text-lg sm:text-2xl lg:text-3xl font-medium mb-8">{LANGUAGE_TRANSLATIONS[langCode].StartsAt}</h3>
					<h4 className="text-white text-sm sm:text-lg font-medium">{LANGUAGE_TRANSLATIONS[langCode].ReadyToWatch}</h4>

					<form onSubmit={(e) => e.preventDefault()} className="text-white m-3 sm:m-6 flex justify-center items-center">
						<div className="flex flex-col items-center lg:flex-row">
							<input required type="email" id="email-first" name="email-first" placeholder={LANGUAGE_TRANSLATIONS[langCode].Email} className={"bg-neutral-500 text-sm lg:text-lg mb-2 lg:mb-0 lg:mr-2 rounded-full w-60 lg:w-80 px-3 lg:px-5 h-12 lg:h-16 outline-offset-1 " + ((errorMessage1 === "Invalid email address") ? 'outline-2 outline-red-700' : 'focus:outline-2 outline-white')} ref={email1} />

							<input required type="password" id="password-first" name="password-first" placeholder={LANGUAGE_TRANSLATIONS[langCode].Password} className={"bg-neutral-500 text-sm lg:text-lg mb-2 lg:mb-0 lg:mr-2 rounded-full w-60 lg:w-80 px-3 lg:px-5 h-12 lg:h-16 outline-offset-1 " + ((errorMessage1 === "Invalid password") ? 'outline-2 outline-red-700' : 'focus:outline-2 outline-white')} ref={password1} />

							<button className="bg-red-700 focus:outline-2 outline-white outline-offset-1 w-60 lg:w-80 h-12 lg:h-16 px-12 rounded-full text-base lg:text-2xl font-semibold active:scale-95" onClick={registerFirst}>{LANGUAGE_TRANSLATIONS[langCode].GetStarted}</button>
						</div>
					</form>
					<div className={(errorMessage1.length !== 0 || message.length !== 0) ? "text-white text-sm lg:text-base w-60 lg:w-4xl p-1 lg:p-2 m-auto rounded-full text-center bg-red-500" : "hidden"}>{errorMessage1 || message}</div>
				</div>
			</div>

			<div className="my-8 m-auto w-95/100">
				<h2 className="text-2xl sm:text-3xl lg:text-4xl my-6 text-white font-extrabold">{LANGUAGE_TRANSLATIONS[langCode].Freq}</h2>
				<FAQues />
			</div>

			<div className="w-4/5 m-auto my-7">
				<h4 className="text-white text-base sm:text-xl text-center font-medium mt-6 mb-3">{LANGUAGE_TRANSLATIONS[langCode].ReadyToWatch}</h4>
				<form onSubmit={(e) => e.preventDefault()} className="flex m-3 sm:m-6 text-white justify-center items-center">
					<div className="flex flex-col items-center lg:flex-row">
						<input required type="email" name="email-second" id="email-second" placeholder={LANGUAGE_TRANSLATIONS[langCode].Email} className={"bg-neutral-500 text-sm lg:text-lg mb-2 lg:mb-0 lg:mr-2 rounded-full w-60 lg:w-80 px-3 lg:px-5 h-12 lg:h-16 outline-offset-1 " + ((errorMessage2 === "Invalid email address") ? 'outline-2 outline-red-700' : 'focus:outline-2 outline-white')} ref={email2} />

						<input required type="password" name="password-second" id="password-second" placeholder={LANGUAGE_TRANSLATIONS[langCode].Password} className={"bg-neutral-500 text-sm lg:text-lg mb-2 lg:mb-0 lg:mr-2 rounded-full w-60 lg:w-80 px-3 lg:px-5 h-12 lg:h-16 outline-offset-1 " + ((errorMessage2 === "Invalid password") ? 'outline-2 outline-red-700' : 'focus:outline-2 outline-white')} ref={password2} />

						<button className="bg-red-700 focus:outline-2 outline-white outline-offset-1 w-60 lg:w-80 h-12 lg:h-16 px-12 rounded-full text-base lg:text-2xl font-semibold active:scale-95" onClick={registerSecond}>{LANGUAGE_TRANSLATIONS[langCode].GetStarted}</button>
					</div>
				</form>
				<div className={(errorMessage2.length !== 0 || message.length !== 0) ? "text-white text-sm lg:text-base w-60 lg:w-4xl p-1 lg:p-2 m-auto rounded-full text-center bg-red-500" : "hidden"}>{errorMessage2 || message}</div>
			</div>

			<Footer />
		</div>
	);
};

export default Register;
