import { useSelector } from "react-redux";
import { LANGUAGE_TRANSLATIONS } from "../utils/i18n";

const Footer = () => {
    const langCode = useSelector((store: any) => store.config.lang);
    
    return (
        <div className="bg-linear-to-t from-black p-9">
            <div className="w-7/10 m-auto">
                <p className="ml-2 mb-5 text-white">{LANGUAGE_TRANSLATIONS[langCode].QuestionsAndCall} <a tabIndex={0} className="hover:underline focus:underline focus:outline-0 font-bold active:scale-95" href="tel:9821738442">9821738442</a></p>

                <div className="text-gray-200 grid gap-2 grid-cols-4 m-2">
                    <p>{LANGUAGE_TRANSLATIONS[langCode].Faq}</p>
                    <p>{LANGUAGE_TRANSLATIONS[langCode].InvestorRelations}</p>
                    <p>{LANGUAGE_TRANSLATIONS[langCode].Privacy}</p>
                    <p>{LANGUAGE_TRANSLATIONS[langCode].SpeedTest}</p>
                    <p>{LANGUAGE_TRANSLATIONS[langCode].HelpCenter}</p>
                    <p>{LANGUAGE_TRANSLATIONS[langCode].Jobs}</p>
                    <p>{LANGUAGE_TRANSLATIONS[langCode].CookiePrefrence}</p>
                    <p>{LANGUAGE_TRANSLATIONS[langCode].LegalNotice}</p>
                    <p>{LANGUAGE_TRANSLATIONS[langCode].Account}</p>
                    <p>{LANGUAGE_TRANSLATIONS[langCode].WaystoWatch}</p>
                    <p>{LANGUAGE_TRANSLATIONS[langCode].CorporateInformation}</p>
                    <p>{LANGUAGE_TRANSLATIONS[langCode].OnlyonNetflix}</p>
                    <p>{LANGUAGE_TRANSLATIONS[langCode].MediaCenter}</p>
                    <p>{LANGUAGE_TRANSLATIONS[langCode].TermsofUse}</p>
                    <p>{LANGUAGE_TRANSLATIONS[langCode].ContactUs}</p>
                </div>

                <p className="ml-2 mt-5 text-white">{LANGUAGE_TRANSLATIONS[langCode].NetflixIndia}</p>
            </div>
        </div>
    );
}

export default Footer;