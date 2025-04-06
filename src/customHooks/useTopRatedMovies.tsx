import { useDispatch } from "react-redux";
import { TOP_RATED_MOVIES_URL, API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await fetch(TOP_RATED_MOVIES_URL, API_OPTIONS);
        const movies = await data.json();

        dispatch(addTopRatedMovies(movies.results));
    }

    useEffect(() => {
        getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;