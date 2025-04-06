import { useSelector } from "react-redux";
import Header from "./Header";
import { LANGUAGE_TRANSLATIONS } from "../utils/i18n";

const Error = () => {
    const langCode = useSelector((store: any) => store.config.lang);
    
    return (
        <>
            <Header />
            <div className="w-screen m-1/2 text-center text-white">{LANGUAGE_TRANSLATIONS[langCode].ErrorOccured}</div>
        </>
    );
}

export default Error;