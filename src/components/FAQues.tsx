import { useState } from "react";
import { FAQItems } from "../utils/FAQ";
import FAQuesItem from "./FAQuesItem";

const FAQues = () => {
    const [openFAQ, setOpenFAQ] = useState(-1);

    return FAQItems.map((faq, index) => <FAQuesItem key={index} quesId={faq.quesid} ansId={faq.ansid} isOpen={index === openFAQ} setIsOpen={() => index === openFAQ ? setOpenFAQ(-1) : setOpenFAQ(index)} />) 
}

export default FAQues;