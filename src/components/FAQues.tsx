import { useState } from "react";
import { FAQ } from "../utils/FAQ";
import FAQuesItem from "./FAQuesItem";

const FAQues = () => {
    const [openFAQ, setOpenFAQ] = useState(-1);

    return FAQ.map((faq, index) => <FAQuesItem key={index} faq={faq} isOpen={index === openFAQ} setIsOpen={() => index === openFAQ ? setOpenFAQ(-1) : setOpenFAQ(index)} />) 
}

export default FAQues;