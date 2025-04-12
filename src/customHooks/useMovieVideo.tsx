import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieVideo = (movieId: string) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store: any) => store.movies.trailerVideo);

    const getMovieVideos = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
            const json = await data.json();
            const filterData = json?.results?.filter((video: any) => video.type === "Trailer");
            const trailer = filterData?.[0];
            dispatch((addTrailerVideo(trailer)));
        } catch (error) {
            console.log('Error', error);
        }

    }

    useEffect(() => {
        if(!trailerVideo) getMovieVideos();
    }, []);
}

export default useMovieVideo;