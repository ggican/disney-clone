export type IGenres = {
  id: number;
  name: string;
};

export type ISeasons = {
  air_date: any;
  episode_number: number;
  episode_type: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  crew: any[];
  guest_stars: any[];
};
