import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { LANGUAGE_TRANSLATIONS } from "../utils/i18n";

const SecondaryContainer = () => {
    const movies = useSelector((store: any) => store?.movies);
    const langCode = useSelector((store: any) => store.config.lang);
    const nowPlayingMovies = movies?.nowPlayingMovies;
    const popularMovies = movies?.popularMovies;
    const topRatedMovies = movies?.topRatedMovies;
    const upcomingMovies = movies?.upcomingMovies;

    return (
        <div className="relative z-30 -mt-2 sm:-mt-40">
            <MovieList title={LANGUAGE_TRANSLATIONS[langCode].NowPlaying} movieList={nowPlayingMovies} />
            <MovieList title={LANGUAGE_TRANSLATIONS[langCode].Popular} movieList={popularMovies} />
            <MovieList title={LANGUAGE_TRANSLATIONS[langCode].TopRated} movieList={topRatedMovies} />
            <MovieList title={LANGUAGE_TRANSLATIONS[langCode].Upcoming} movieList={upcomingMovies} />
        </div>
    );
}

export default SecondaryContainer;