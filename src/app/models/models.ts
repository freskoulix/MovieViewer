/*
adult: false
backdrop_path: "/lkOZcsXcOLZYeJ2YxJd3vSldvU4.jpg"
genre_ids: (4) [28, 9648, 878, 53]
id: 198663
original_language: "en"
original_title: "The Maze Runner"
overview: "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow “runners” for a shot at escape."
popularity: 464.010332
poster_path: "/coss7RgL0NH6g4fC2s5atvf3dFO.jpg"
release_date: "2014-09-10"
title: "The Maze Runner"
video: false
vote_average: 7
vote_count: 6471
*/

export interface Movie {
  adult: boolean,
  backdropPath: string,
  genreIds: [number],
  id: number,
  originalLanguage: 'string',
  originalTitle: 'string',
  overview: string,
  popularity: number,
  posterPath: string,
  releaseDate: string,
  title: string,
  video: boolean,
  voteAverage: number,
  voteCount: number
};

export interface MostPopular {
  page: number,
  totalPages: number,
  totalResults: number,
  results: [Movie]
};
