import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieVideo = (movieId: string) => {
    const dispatch = useDispatch();
    const langCode = useSelector((store: any) => store.config.lang);

    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
        const json = await data.json();

        const filterData = json.results.filter((video: any) => video.type === "Trailer");
        const trailer = filterData[0];
        dispatch((addTrailerVideo(trailer)));
    }

    useEffect(() => {
        getMovieVideos();
    }, [langCode]);
}

export default useMovieVideo;