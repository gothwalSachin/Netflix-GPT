import { RefObject, useRef, useState } from "react";
import Footer from "./Footer";
import FreqAQ from "./FreqAQ";
import Header from "./Header";
import { emailAndPhoneNumberValidator } from "../utils/validate";
import { FAQ } from "../utils/FAQ";

const Register = () => {
	const bg = new URL(
		"../assets/background-image.jpg",
		import.meta.url
	).toString();

	const [openFAQ, setOpenFAQ] = useState(-1);
	const [isErrorOnRegister1, setIsErrorOnRegister1] = useState(false);
	const [isErrorOnRegister2, setIsErrorOnRegister2] = useState(false);
	const email1: string | RefObject<HTMLInputElement> = useRef(null as unknown as HTMLInputElement);
	const email2: string | RefObject<HTMLInputElement> = useRef(null as unknown as HTMLInputElement);

	const registerFirst = (): void => {
		if(emailAndPhoneNumberValidator(email1.current.value)) setIsErrorOnRegister1(false);
		else setIsErrorOnRegister1(true);
	}
	const registerSecond = (): void => {
		if(emailAndPhoneNumberValidator(email2.current.value)) setIsErrorOnRegister2(false);
		else setIsErrorOnRegister2(true);
	}

	return (
		<div className="bg-red-950 h-full bg-linear-to-b from-black">
			<Header />

			<div
				style={{ backgroundImage: `url(${bg})` }}
				className="w-95/100 h-2/3 rounded-xl m-auto object-scale-down shadow-2xl"
			>
				<div className="w-4xl text-center m-auto p-15">
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

					<form onSubmit={(e) => e.preventDefault()} className="flex text-white m-9 justify-center items-center">
						<div className="group relative mr-4">
							<input required type="email" id="email-first" className={"bg-neutral-500 rounded-full w-80 pt-4 px-5 peer h-16 outline-offset-2 " + (isErrorOnRegister1 ? 'outline-2 outline-red-700' : 'focus:outline-2 outline-white')} ref={email1} />
							<label htmlFor="email-first" className="transform transition-all absolute pl-5 top-0 h-full flex items-center text-sm group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-0.5 peer-valid:text-xs peer-valid:h-1/2 peer-valid:-translate-y-0.5">Email Address</label>
						</div>
						<button className="bg-red-700 focus:outline-2 outline-white outline-offset-2 px-12 py-4 rounded-full text-2xl font-semibold" onClick={registerFirst}>Get Started</button>
					</form>
				</div>
			</div>

			<div className="my-8 m-auto w-95/100">
				<h2 className="text-4xl my-6 text-white font-extrabold">Frequently Asked Questions</h2>
				{FAQ.map((faq, index) => <FreqAQ key={index} faq={faq} isOpen={index === openFAQ} setIsOpen={() => index === openFAQ ? setOpenFAQ(-1) : setOpenFAQ(index)} />)}
			</div>

			<div className="w-2/3 m-auto my-8">
				<h4 className="text-white text-base text-center font-medium mt-6 mb-3">
					Ready to watch? Enter your email to create or restart your
					membership.
				</h4>
				<form onSubmit={(e) => e.preventDefault()} className="flex text-white justify-center items-center">
					<div className="group relative mr-4">
						<input required type="email" id="email-second" className={"bg-neutral-500 rounded-full w-80 pt-4 px-5 h-16 peer outline-offset-2 " + (isErrorOnRegister2 ? 'outline-2 outline-red-700' : 'focus:outline-2 outline-white')} ref={email2} />
						<label htmlFor="email-first" className="transform transition-all absolute pl-5 top-0 h-full flex items-center text-sm group-focus-within:text-xs group-focus-within:h-1/2 group-focus-within:-translate-y-0.5 peer-valid:text-xs peer-valid:h-1/2 peer-valid:-translate-y-0.5">Email Address</label>
					</div>
					<button type="submit" id="email-second" className="bg-red-700 focus:outline-2 outline-white outline-offset-2 px-12 py-4 rounded-full text-2xl font-semibold" onClick={registerSecond}>Get Started</button>
				</form>
			</div>

			<Footer />
		</div>
	);
};

export default Register;
