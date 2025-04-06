import { useSelector } from "react-redux";
import useMovieVideo from "../customHooks/useMovieVideo";


const VideoBackground = (props: { movieId: string }) => {
    useMovieVideo(props.movieId);
    const trailerVideo = useSelector((store: any) => store.movies?.trailerVideo);

    return (
        <div className="w-full">
            <iframe className="w-full aspect-video focus:outline-none" src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&controls=0&disablekb=1&iv_load_policy=3&loop=1&rel=0"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    );
}

export default VideoBackground;