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
        if (searchText.current.value === "") return;
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
            <form onSubmit={(e) => e.preventDefault()} className="pt-50 sm:pt-40 pb-12 sm:pb-18 flex justify-center items-center flex-col sm:flex-row text-white" >
                <input type="text" name="searchtext" id="searchtext" required ref={searchText} className="bg-neutral-500 text-xs md:text-md mb-2 sm:mb-0 sm:mr-2 rounded-full w-60 lg:w-80 px-3 lg:px-5 h-12 lg:h-16 outline-offset-1 focus:outline-2 outline-white" placeholder={LANGUAGE_TRANSLATIONS[langCode].WhatToday} />
                <button className="bg-red-700 focus:outline-2 outline-white outline-offset-1 w-60 lg:w-80 h-12 lg:h-16 px-12 rounded-full text-xs sm:text-md lg:text-lg font-semibold active:scale-95 shadow-2xl" onClick={handleGptSearchClick}>{LANGUAGE_TRANSLATIONS[langCode].Search}</button>
            </form>
        </>
    );
}

export default GptSearchBar;