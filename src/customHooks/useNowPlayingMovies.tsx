import { useDispatch, useSelector } from "react-redux";
import { NOW_PLAYING_MOVIES_URL, API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const langCode = useSelector((store: any) => store.config.lang);
    
    const getNowPlayingMoives = async () => {
        const data = await fetch(NOW_PLAYING_MOVIES_URL + langCode, API_OPTIONS);
        const movies = await data.json();

        dispatch(addNowPlayingMovies(movies.results));
    }

    useEffect(() => {
        getNowPlayingMoives();
    }, [langCode]);
}

export default useNowPlayingMovies;