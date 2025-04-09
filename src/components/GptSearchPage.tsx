import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
    const BG_IMAGE = new URL(
        "../assets/background-image.jpg",
        import.meta.url
    ).toString();
    
    return (
        <>
            <div style={{ backgroundImage: `url(${BG_IMAGE})` }} className="h-150 bg-no-repeat px-9 pt-2 w-full m-auto object-scale-down absolute -z-10"></div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </>
    );
}

export default GptSearchPage;