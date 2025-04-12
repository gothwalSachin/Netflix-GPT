import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector((store: any) => store.movies?.nowPlayingMovies);
    if (movies === null) return <div className="animate-pulse"><div className="h-100 bg-gray-200 dark:bg-gray-700"></div></div>;

    const mainMovie = movies[0];

    const { original_title, overview, id } = mainMovie;

    return (
        <div className="pt-36 sm:pt-24 lg:pt-0 mb-8 lg:mb-4">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    );
}

export default MainContainer;