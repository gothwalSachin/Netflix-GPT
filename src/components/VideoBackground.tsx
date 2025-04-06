import { useSelector } from "react-redux";
import useMovieVideo from "../customHooks/useMovieVideo";


const VideoBackground = (props: { movieId: string }) => {
    useMovieVideo(props.movieId);
    const trailerVideo = useSelector((store: any) => store.movies?.trailerVideo);

    return (
        <div className="w-screen">
            <iframe className="w-screen aspect-video focus:outline-none -mt-3.5" src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&controls=0&iv_load_policy=3&rel=0&playsinline=1&showinfo=0&autohide=1&wmode=transparent&loop=1&playlist=" + trailerVideo?.key} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" title="video"></iframe>
        </div>
    );
}

export default VideoBackground;