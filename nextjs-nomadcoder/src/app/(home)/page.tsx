// root page

export const metadata = {
  title: 'Home',
};

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovie() {
  // data fetching
  await new Promise((resolve) => setTimeout(resolve, 7000));
  const resp = await fetch(URL);
  const json = await resp.json();
  return json;
}

export default async function HomePage() {
  // Home page component

  const movies = await getMovie();
  return <div>{JSON.stringify(movies)}</div>;
}
