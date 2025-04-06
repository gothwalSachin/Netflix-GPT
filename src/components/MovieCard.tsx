import { IMAGE_CDN } from "../utils/constants";

const MovieCard = (props: { poster: string }) => {
    return (
        <img src={IMAGE_CDN + props.poster} alt="Movie card" className="mx-1 w-40 rounded-sm" />
    );
}

export default MovieCard;