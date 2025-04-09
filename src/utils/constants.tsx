export const NOW_PLAYING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

export const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular?page=1';

export const TOP_RATED_MOVIES_URL = 'https://api.themoviedb.org/3/movie/top_rated?page=1';

export const UPCOMING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/upcoming?page=1';

export const IMAGE_CDN = 'https://image.tmdb.org/t/p/w500/';

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_API_KEY
    }
};

export const SUPPORTED_LANGUAGES = [
    { identifier: 'en-US', name: 'English' },
    { identifier: 'hi', name: 'Hindi' },
    { identifier: 'ru', name: 'Russian' },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_API_KEY;
