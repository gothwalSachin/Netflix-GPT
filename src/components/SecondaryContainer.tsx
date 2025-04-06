import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store: any) => store?.movies);
    const nowPlayingMovies = movies?.nowPlayingMovies;
    const popularMovies = movies?.popularMovies;
    const topRatedMovies = movies?.topRatedMovies;
    const upcomingMovies = movies?.upcomingMovies;

    return (
        <div className="relative z-30 -mt-36">
            <MovieList title={"Now Playing"} movieList={nowPlayingMovies} />
            <MovieList title={"Popular"} movieList={popularMovies} />
            <MovieList title={"Top Rated"} movieList={topRatedMovies} />
            <MovieList title={"Up Coming"} movieList={upcomingMovies} />
        </div>
    );
}

export default SecondaryContainer;