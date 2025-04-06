export const NOW_PLAYING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

export const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?page=1';

export const TOP_RATED_MOVIES_URL = 'https://api.themoviedb.org/3/movie/top_rated?page=1';

export const UPCOMING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/upcoming?page=1';

export const IMAGE_CDN = 'https://image.tmdb.org/t/p/w500/';

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYWUzNzE0YjQyM2FkYWVkZTA3MTQ0ZDc1NWE4N2JhZCIsIm5iZiI6MTc0Mzg3NjExMC42NjYsInN1YiI6IjY3ZjE3MDBlY2JkNTViNjYxZmQ5N2UyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nGX3GVnX1MQV0ga_Mox2tbZwaRRJ-EHwddZxHsbpln4'
    }
};

export const HEADER_LOGO = new URL("../assets/header.png", import.meta.url).toString();

export const BG_IMAGE = new URL(
        "../assets/background-image.jpg",
        import.meta.url
    ).toString();