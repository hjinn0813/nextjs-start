// root page

import Link from 'next/link';

export const metadata = {
  title: 'Home',
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovie() {
  // data fetching
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const resp = await fetch(API_URL);
  const json = await resp.json();
  return json;
}

export default async function HomePage() {
  // Home page component

  const movies = await getMovie();
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}
