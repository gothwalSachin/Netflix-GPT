import { useSelector } from "react-redux";
import useMovieVideo from "../customHooks/useMovieVideo";


const VideoBackground = (props: { movieId: string }) => {
    useMovieVideo(props.movieId);
    const trailerVideo = useSelector((store: any) => store.movies?.trailerVideo);
    if (!trailerVideo) <div className="animate-pulse"><div className="h-100 bg-gray-200 dark:bg-gray-700"></div></div>;

    return (
        <div className="w-screen">
            <iframe className="w-screen aspect-video focus:outline-none lg:-mt-3.5" src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&controls=0&iv_load_policy=3&cc_load_policy=0&disablekb=1&rel=0&playsinline=1&showinfo=0&autohide=1&wmode=transparent&loop=1&playlist=" + trailerVideo?.key} allow="autoplay; encrypted-media; picture-in-picture;" title="video"></iframe>
        </div>
    );
}

export default VideoBackground;