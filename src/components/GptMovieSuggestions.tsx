import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
    const { gptMoviesList, finalMoviesList } = useSelector((store: any) => store.gpt);

    return (
        <>
            <div className="bg-black opacity-85 w-95/100 m-auto rounded-sm mb-7">
                {gptMoviesList?.map((movieName: string, index: number) => <MovieList key={movieName} title={movieName} movieList={finalMoviesList[index]} />)}
            </div>
        </>
    );
}

export default GptMovieSuggestions;