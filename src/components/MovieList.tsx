import MovieCard from "./MovieCard";

const MovieList = (props: { title: string, movieList: []}) => {
    const { title, movieList } = props;
    return (
        <div className="pl-13 py-6">
            <h1 className="text-white text-4xl font-semibold pb-6 mx-2">{title}</h1>
            <div className="flex overflow-x-auto">
                {movieList?.map((movie: any) => <MovieCard key={movie?.id} poster={movie.poster_path} />)}
            </div>
        </div>
    );
}

export default MovieList;