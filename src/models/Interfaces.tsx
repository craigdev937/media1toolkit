export interface IAll {
    page: number,
    results: {
        backdrop_path: string,
        id: number,
        title: string,
        original_title: string,
        overview: string,
        poster_path: string,
        media_type: string,
        adult: boolean,
        original_language: string,
        genre_ids: string[],
        popularity: number,
        release_date: string,
        video: boolean,
        vote_average: number,
        vote_count: number
    }[],
    total_pages: number,
    total_results: number
};

export interface IFilmCard {
    backdrop_path: string,
    id: number,
    title: string,
    original_title: string,
    overview: string,
    poster_path: string,
    media_type: string,
    adult: boolean,
    original_language: string,
    genre_ids: string[],
    popularity: number,
    release_date: string,
    video: boolean,
    vote_average: number,
    vote_count: number
};

export interface IFilmDetail {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: {
        id: number,
        poster_path: string,
        backdrop_path: string
    },
    budget: number,
    genres: [{
        id: number,
        name: string
    }],
    homepage: string,
    id: number,
    imdb_id: string,
    origin_country: string[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: [{
        id: number,
        logo_path: string,
        name: string,
        origin_country: string
    }],
    production_countries: [{
        iso_3166_1: string,
        name: string
    }],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: [{
        english_name: string,
        iso_639_1: string,
        name: string
    }],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
};

export interface IFilmVideo {
    id: number,
    results: [{
        iso_639_1: string,
        iso_3166_1: string,
        name: string,
        key: string,
        site: string,
        size: number,
        type: string,
        official: boolean,
        published_at: string,
        id: string
    }]
};

export interface IFilmVideoData {
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: boolean,
    published_at: string,
    id: string
};

export interface IPeople {
    page: number,
    results: [{
        id: number,
        original_name: string,
        media_type: string,
        adult: boolean,
        popularity: number,
        gender: number,
        known_for_department: string,
        profile_path: string,
        known_for: [{
            backdrop_path: string,
            id: number,
            title: string,
            name: string,
            original_title: string,
            original_name: string,
            overview: string,
            poster_path: string,
            media_type: string,
            adult: boolean,
            original_language: string,
            genre_ids: number[],
            popularity: number,
            release_date: string,
            first_air_date: string,
            video: boolean,
            vote_average: number,
            vote_count: number,
            origin_country: string[]
        }]
    }]
};

export interface IPeopleDetail {
    id: number,
    original_name: string,
    media_type: string,
    adult: boolean,
    popularity: number,
    gender: number,
    known_for_department: string,
    profile_path: string,
    known_for: [{
        backdrop_path: string,
        id: number,
        title: string,
        name: string,
        original_title: string,
        original_name: string,
        overview: string,
        poster_path: string,
        media_type: string,
        adult: boolean,
        original_language: string,
        genre_ids: number[],
        popularity: number,
        release_date: string,
        first_air_date: string,
        video: boolean,
        vote_average: number,
        vote_count: number,
        origin_country: string[]
    }]
};



