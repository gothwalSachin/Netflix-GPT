import MovieCard from "./MovieCard";

const MovieList = (props: { title: string, movieList: []}) => {
    const { title, movieList } = props;
    return (
        <div className="px-14 py-6">
            <h1 className="text-white text-3xl font-semibold pb-6">{title}</h1>
            <div className="flex overflow-x-auto focus:outline-none">
                {movieList?.map((movie: any) => <MovieCard key={movie?.id} poster={movie.poster_path} />)}
            </div>
        </div>
    );
}

export default MovieList;