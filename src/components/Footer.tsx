const Footer = () => {
    return (
        <div className="bg-linear-to-t from-black p-9">
            <div className="w-7/10 m-auto">
                <p className="ml-2 mb-5 text-white">Questions? Call <a tabIndex={0} className="hover:underline focus:underline focus:outline-0 font-bold" href="tel:9821738442">9821738442</a></p>

                <div className="text-gray-200 grid gap-2 grid-cols-4 m-2">
                    <p>FAQ</p>
                    <p>Investor Relations</p>
                    <p>Privacy</p>
                    <p>Speed Test</p>
                    <p>Help Center</p>
                    <p>Jobs</p>
                    <p>Cookie Prefrence</p>
                    <p>Legal Notice</p>
                    <p>Account</p>
                    <p>Ways to Watch</p>
                    <p>Corporate Information</p>
                    <p>Only on Netflix</p>
                    <p>Media Center</p>
                    <p>Terms of Use</p>
                    <p>Contact Us</p>
                </div>

                <p className="ml-2 mt-5 text-white">Netflix India</p>
            </div>
        </div>
    );
}

export default Footer;