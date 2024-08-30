// movie info comp

import { API_URL } from '../app/(home)/page';
import style from '../styles/movie-info.module.css';

export async function getMovie(id: string) {
  const resp = await fetch(`${API_URL}/${id}`);
  return resp.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={style.container}>
      <img className={style.poster} src={movie.poster_path} alt={movie.title} />
      <div className={style.info}>
        <h1 className={style.title}>{movie.title}</h1>
        <h3>⭐ {movie.vote_average.toFixed(1)}</h3>
        <p>🎬 Release Date : {movie.release_date}</p>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={'_blank'}>
          HOMEPAGE →
        </a>
      </div>
    </div>
  );
}
