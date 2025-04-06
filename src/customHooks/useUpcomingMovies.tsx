import { useDispatch, useSelector } from "react-redux";
import { UPCOMING_MOVIES_URL, API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const langCode = useSelector((store: any) => store.config.lang);
    
    const getUpcomingMovies = async () => {
        const data = await fetch(UPCOMING_MOVIES_URL + langCode, API_OPTIONS);
        const movies = await data.json();

        dispatch(addUpcomingMovies(movies.results));
    }

    useEffect(() => {
        getUpcomingMovies();
    }, [langCode]);
}

export default useUpcomingMovies;