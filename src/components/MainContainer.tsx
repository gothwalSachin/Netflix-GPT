import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector((store: any) => store.movies?.nowPlayingMovies);
    if(movies === null) return;

    const mainMovie = movies[0];

    const { original_title, overview, id } = mainMovie;

    return (
        <>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </>
    );
}

export default MainContainer;