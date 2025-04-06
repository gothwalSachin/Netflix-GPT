import { useDispatch } from "react-redux";
import { MOVIES_URL, API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMoives = async () => {
        const data = await fetch(MOVIES_URL, API_OPTIONS);
        const movies = await data.json();

        dispatch(addNowPlayingMovies(movies.results));
    }

    useEffect(() => {
        getNowPlayingMoives();
    }, []);
}

export default useNowPlayingMovies;