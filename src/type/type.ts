export type MultiSearchDataType = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
};

export type known_forType = {
  id: number;
  media_type: Media_typeType;
  title: string;
};
export type SearchQueryType = {
  id: number;
  profile_path: string;
  poster_path: string;
  name: string;
  title: string;
  overview: string;
  release_date: string;
  first_air_date: string;
  known_for_department: string;
  known_for: known_forType[];
  gender: number;
};

export type SearchByMediaAndTextType = {
  query: string;
  mediaType: Media_typeType;
  currentPage?: number;
};
export type FetchResult<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export type QuerySearchType = {
  search: string;
  currentPage: number;
};

export type MovieType = {
  adult: false;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: Media_typeType;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: false;
  vote_average: number;
  vote_count: number;
  first_air_date?: string;
  original_name?: string;
  name?: string;
};

export type SerieType = {
  adult: false;
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};

export type VideoFetchType<T> = {
  id: number;
  results: T;
};

export type VideoType = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

export type QueryParamsType = {
  mediaType: Media_typeType;
  id: string;
};

export type ExternalsIdType = {
  id: number;
  imdb_id: string;
  wikidata_id: string;
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
};

export type Media_typeType = 'movie' | 'tv' | 'person';
export type FetchTime_window = 'day' | 'week';
