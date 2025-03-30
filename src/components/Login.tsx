import { useState } from "react";
import Footer from "./Footer";
import FreqAQ from "./FreqAQ";
import Header from "./Header";

const Login = () => {
	const bg = new URL(
		"../assets/background-image.jpg",
		import.meta.url
	).toString();

	const FAQ = [
		{
			ques: 'What is Netflix?',
			ans: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
			You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`
		},
		{
			ques: 'How much does Netflix cost?',
			ans: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.'
		},
		{
			ques: 'Where can I watch?',
			ans: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.'
		},
		{
			ques: 'How do I cancel?',
			ans: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
		},
		{
			ques: 'What can I watch on Netflix?',
			ans: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
		},
		{
			ques: 'Is Netflix good for kids?',
			ans: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.'
		},
	];

	const [openFAQ, setOpenFAQ] = useState(-1);

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

					<form className="flex text-white m-9 justify-center">
						<input type="email" name="email-first" id="email-first" placeholder="Email address" className="bg-neutral-500 outline-white outline-offset-2 rounded-full mr-4 w-80 p-4" />
						<button type="submit" id="email-first" className="bg-red-700 outline-white outline-offset-2 px-12 py-4 rounded-full text-2xl font-semibold">Get Started</button>
					</form>
				</div>
			</div>

			<div className="my-8 m-auto w-95/100">
				<h2 className="text-4xl my-6 text-white font-extrabold">Frequently Asked Questions</h2>
				{/* {FAQ.map((faq, index) => <button key={index} tabIndex={0} className="outline-white outline-offset-2 w-full block" onClick={() => index === openFAQ ? setOpenFAQ(-1) : setOpenFAQ(index)}><FreqAQ faq={faq} isOpen={index === openFAQ} /></button>)} */}
				{FAQ.map((faq, index) => <FreqAQ key={index} faq={faq} isOpen={index === openFAQ} setIsOpen={() => index === openFAQ ? setOpenFAQ(-1) : setOpenFAQ(index)} />)}
			</div>

			<div className="w-2/3 m-auto my-8">
				<h4 className="text-white text-base text-center font-medium mt-6 mb-3">
					Ready to watch? Enter your email to create or restart your
					membership.
				</h4>
				<form action="" className="flex text-white justify-center">
					<input type="email" name="email-second" id="email-second" placeholder="Email address" className="bg-neutral-500 outline-white outline-offset-2 rounded-full mr-4 w-80 p-4" />
					<button type="submit" id="email-second" className="bg-red-700 outline-white outline-offset-2 px-12 py-4 rounded-full text-2xl font-semibold">Get Started</button>
				</form>
			</div>

			<Footer />
		</div>
	);
};

export default Login;
