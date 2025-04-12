import { useDispatch, useSelector } from "react-redux";
import { TOP_RATED_MOVIES_URL, API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRated = useSelector((store: any) => store.movies.topRatedMovies);
    
    const getTopRatedMovies = async () => {
        try {
            const data = await fetch(TOP_RATED_MOVIES_URL, API_OPTIONS);
            const movies = await data.json();
            
            dispatch(addTopRatedMovies(movies.results));
        } catch (error) {
            console.log('Error', error);
        }
    }

    useEffect(() => {
        if(!topRated) getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;