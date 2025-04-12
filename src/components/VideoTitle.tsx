import { useSelector } from "react-redux";
import { LANGUAGE_TRANSLATIONS } from "../utils/i18n";

const VideoTitle = (props: {title: string, overview: string}) => {
    const langCode = useSelector((store: any) => store.config.lang);
    
    return (
        <div className="px-5 lg:px-12 text-white absolute w-full aspect-video sm:bg-gradient-to-r from-black pt-34 sm:pt-45 lg:pt-50 mb-24 lg:mb-4">
            <h1 className="text-base sm:text-lg md:text-4xl font-bold mb-1 sm:m-5">{props.title}</h1>
            <p className="hidden lg:inline-block w-1/3 mx-5 my-7 text-base leading-6">{props.overview}</p>

            <div className="sm:m-5 font-medium">
                <button className="bg-white text-black text-sm sm:text-base px-3 sm:px-5 py-0.5 sm:py-1 rounded-sm mr-1 sm:mr-2 focus:outline-2 outline-white outline-offset-2 hover:opacity-80 active:scale-95">▶︎ {LANGUAGE_TRANSLATIONS[langCode].Play}</button>
                <button className="bg-neutral-600 text-sm sm:text-base px-3 sm:px-5 py-0.5 sm:py-1 rounded-sm focus:outline-2 outline-white outline-offset-2 hover:opacity-90 active:scale-95">⌽ {LANGUAGE_TRANSLATIONS[langCode].MoreInfo}</button>
            </div>
        </div>
    );
}

export default VideoTitle;