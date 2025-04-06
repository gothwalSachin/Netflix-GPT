import { useDispatch } from "react-redux";
import { NOW_PLAYING_MOVIES_URL, API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMoives = async () => {
        const data = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);
        const movies = await data.json();

        dispatch(addNowPlayingMovies(movies.results));
    }

    useEffect(() => {
        getNowPlayingMoives();
    }, []);
}

export default useNowPlayingMovies;