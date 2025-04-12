import { useDispatch, useSelector } from "react-redux";
import { NOW_PLAYING_MOVIES_URL, API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlaying = useSelector((store: any) => store.movies.nowPlayingMovies);
    
    const getNowPlayingMoives = async () => {
        try {
            const data = await fetch(NOW_PLAYING_MOVIES_URL, API_OPTIONS);
            const movies = await data.json();
            
            dispatch(addNowPlayingMovies(movies.results));
        } catch (error) {
            console.log('Error', error);
        }
    }

    useEffect(() => {
        if(!nowPlaying) getNowPlayingMoives();
    }, []);
}

export default useNowPlayingMovies;