import { useDispatch } from "react-redux";
import { POPULAR_MOVIES_URL, API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const getPopularMovies = async () => {
        const data = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
        const movies = await data.json();

        dispatch(addPopularMovies(movies.results));
    }

    useEffect(() => {
        getPopularMovies();
    }, []);
}

export default usePopularMovies;