import { useDispatch, useSelector } from "react-redux";
import { POPULAR_MOVIES_URL, API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store: any) => store.movies.popularMovies);
    
    const getPopularMovies = async () => {
        try {
            const data = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
            const movies = await data.json();
            
            dispatch(addPopularMovies(movies.results));
        } catch (error) {
            console.log('Error', error);
        }
    }

    useEffect(() => {
        if(!popularMovies) getPopularMovies();
    }, []);
}

export default usePopularMovies;