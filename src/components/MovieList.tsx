import MovieCard from "./MovieCard";

const MovieList = (props: { title: string, movieList: []}) => {
    const { title, movieList } = props;
    return (
        <div className="px-5 sm:px-10 md:px-17 py-4 sm:py-6">
            <h1 className="text-white text-lg sm:text-xl lg:text-3xl font-semibold pb-2 sm:pb4 md:pb-6">{title}</h1>
            <div className="flex overflow-x-auto focus:outline-none">
                {movieList ? (movieList.map((movie: any) => <MovieCard key={movie?.id} poster={movie.poster_path} />)) : (
                    Array(15).fill(0).map((ele, idx) => <div key={idx} className="animate-pulse"><div className="bg-gray-200 dark:bg-gray-700 w-25 sm:w-30 md:w-40 mx-1 h-37 sm:h-60 rounded-sm"></div></div>))}
            </div>
        </div>
    );
}

export default MovieList;