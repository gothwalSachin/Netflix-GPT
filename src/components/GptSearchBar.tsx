import { useSelector } from "react-redux";
import { LANGUAGE_TRANSLATIONS } from "../utils/i18n";

const GptSearchBar = () => {
    const langCode = useSelector((store: any) => store.config.lang);

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} className="p-36 group relative flex justify-center items-start text-white" >
                <input type="text" name="searchtext" id="searchtext" className="bg-neutral-500 mr-2 rounded-full w-80 py-4 px-5 h-16 peer outline-offset-2 focus:outline-2 outline-white" placeholder={LANGUAGE_TRANSLATIONS[langCode].WhatToday} />
                <button className="bg-red-700 focus:outline-2 outline-white outline-offset-2 px-12 py-4 rounded-full text-2xl font-semibold active:scale-95">{LANGUAGE_TRANSLATIONS[langCode].Search}</button>
            </form>
        </>
    );
}

export default GptSearchBar;