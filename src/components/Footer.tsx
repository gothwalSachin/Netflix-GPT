const Footer = () => {
    return (
        <div className="bg-linear-to-t from-black p-9">
            <div className="w-7/10 m-auto">
                <p className="ml-2 mb-5 text-white">Questions? Call <a className="underline" href="tel:9821738442">9821738442</a></p>

                <div className="flex justify-between text-gray-100">
                    <div>
                        <p className="m-2">FAQ</p>
                        <p className="m-2">Investor Relations</p>
                        <p className="m-2">Privacy</p>
                        <p className="m-2">Speed Test</p>
                    </div>
                    <div>
                        <p className="m-2">Help Center</p>
                        <p className="m-2">Jobs</p>
                        <p className="m-2">Cookie Prefrence</p>
                        <p className="m-2">Legal Notice</p>
                    </div>
                    <div>
                        <p className="m-2">Account</p>
                        <p className="m-2">Ways to Watch</p>
                        <p className="m-2">Corporate Information</p>
                        <p className="m-2">Only on Netflix</p>
                    </div>
                    <div>
                        <p className="m-2">Media Center</p>
                        <p className="m-2">Terms of Use</p>
                        <p className="m-2">Contact Us</p>
                    </div>
                </div>

                <p className="ml-2 mt-5 text-white">Netflix India</p>
            </div>
        </div>
    );
}

export default Footer;