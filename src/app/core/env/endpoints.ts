export interface EndpointsConfig {
  // token: string;
  // authenticate: string;
  // session_new: string;
  // account: string;
  // log_out: string;
  now_playing: string;
  // popular: string;
  // genres: string;
  // upcoming: string;
}

export type EndpointsConfigType = keyof EndpointsConfig;

export const endpoints: EndpointsConfig = {
  // token: 'authentication/token/new',
  // authenticate: 'authenticate',
  // session_new: 'authentication/session/new',
  // account: 'account',
  // log_out: 'authentication/session',
  now_playing: 'movie/now_playing', // a list of movies that are currently in theatres
  // popular: 'movie/popular',
  // genres: 'genre/:type/list',
  // upcoming: 'movie/upcoming',
};
