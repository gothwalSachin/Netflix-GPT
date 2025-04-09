import Footer from "./Footer";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
    const BG_IMAGE = new URL(
        "../assets/background-image.jpg",
        import.meta.url
    ).toString();
    
    return (
        <>
            <div style={{ backgroundImage: `url(${BG_IMAGE})` }} className="fixed h-full w-full object-cover m-auto -z-30"></div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </>
    );
}

export default GptSearchPage;