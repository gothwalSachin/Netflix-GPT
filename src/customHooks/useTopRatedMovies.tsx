import { useDispatch, useSelector } from "react-redux";
import { TOP_RATED_MOVIES_URL, API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const langCode = useSelector((store: any) => store.config.lang);
    
    const getTopRatedMovies = async () => {
        const data = await fetch(TOP_RATED_MOVIES_URL + langCode, API_OPTIONS);
        const movies = await data.json();

        dispatch(addTopRatedMovies(movies.results));
    }

    useEffect(() => {
        getTopRatedMovies();
    }, [langCode]);
}

export default useTopRatedMovies;