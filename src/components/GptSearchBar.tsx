import { useDispatch, useSelector } from "react-redux";
import { LANGUAGE_TRANSLATIONS } from "../utils/i18n";
import { RefObject, useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const langCode = useSelector((store: any) => store.config.lang);
    const searchText: string | RefObject<HTMLInputElement> = useRef(null as unknown as HTMLInputElement);
    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie: string) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&page=1', API_OPTIONS);
        const json = await data.json();

        return json.results;
    }

    const handleGptSearchClick = async () => {
        const gptQuery = "Act as a movie recommendation system ans suggest some movies for the query: " + searchText.current.value + ". Only give me names of atmost five high rated movies comma seperated."

        try {
            const gptResults = await openai.chat.completions.create({
                model: 'gpt-4o-mini',
                messages: [
                    { role: 'user', content: gptQuery },
                ],
            });

            const gptSearchedMovies = gptResults?.choices?.[0]?.message?.content?.split(',')

            const promiseArray = gptSearchedMovies && gptSearchedMovies.map((movie, index) => searchMovieTMDB(movie));
            const tmdbSearchedMovies = promiseArray && await Promise.all(promiseArray);

            dispatch(addGptMovieResult({ gptMoviesList: gptSearchedMovies, finalMoviesList: tmdbSearchedMovies }));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} className="pt-36 pb-18 group relative flex justify-center items-start text-white" >
                <input type="text" name="searchtext" id="searchtext" ref={searchText} className="bg-neutral-500 mr-2 rounded-full w-80 py-4 px-5 h-16 peer outline-offset-2 focus:outline-2 outline-white shadow-2xl" placeholder={LANGUAGE_TRANSLATIONS[langCode].WhatToday} />
                <button className="bg-red-700 focus:outline-2 outline-white outline-offset-2 px-12 py-4 rounded-full text-2xl font-semibold active:scale-95 shadow-2xl" onClick={handleGptSearchClick}>{LANGUAGE_TRANSLATIONS[langCode].Search}</button>
            </form>
        </>
    );
}

export default GptSearchBar;