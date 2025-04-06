import { useSelector } from "react-redux";
import { LANGUAGE_TRANSLATIONS } from "../utils/i18n";

const FAQuesItem = (props: any) => {
    const { quesId, ansId, isOpen, setIsOpen } = props;
    const langCode = useSelector((store: any) => store.config.lang);
    
    return (
        <>
            <button className="flex justify-between items-center text-xl focus:outline-2 outline-white outline-offset-2 text-white bg-neutral-800 w-full px-8 py-6 font-medium rounded-2xl mb-3 cursor-pointer hover:bg-neutral-700 ease-out duration-400" onClick={() => setIsOpen()}>
                <h3>{LANGUAGE_TRANSLATIONS[langCode][quesId]}</h3>
                {isOpen ? <p className="text-2xl">x</p> : <p className="text-2xl">+</p>}
            </button>
            {isOpen && <div className="text-white bg-neutral-800 px-8 py-6 rounded-2xl mb-3 transition-transform ease-in-out duration-700">
                <h3 className="text-xl">{LANGUAGE_TRANSLATIONS[langCode][ansId]}</h3></div>}
        </>
    );
}

export default FAQuesItem;