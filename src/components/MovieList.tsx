import MovieCard from "./MovieCard";

const MovieList = (props: { title: string, movieList: []}) => {
    const { title, movieList } = props;
    return (
        <div className="px-10 sm:px-14 py-4 sm:py-6">
            <h1 className="text-white text-lg sm:text-xl md:text-3xl font-semibold pb-2 sm:pb4 md:pb-6">{title}</h1>
            <div className="flex overflow-x-auto focus:outline-none">
                {movieList?.map((movie: any) => <MovieCard key={movie?.id} poster={movie.poster_path} />)}
            </div>
        </div>
    );
}

export default MovieList;