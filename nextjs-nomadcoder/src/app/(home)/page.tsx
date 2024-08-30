// root page

import Link from 'next/link';
import Movie from './../../components/movie';
import style from '../../styles/home.module.css';

export const metadata = {
  title: 'Home',
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovie() {
  // data fetching
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const resp = await fetch(API_URL);
  const json = await resp.json();
  return json;
}

export default async function HomePage() {
  // Home page component

  const movies = await getMovie();
  return (
    <div className={style.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
