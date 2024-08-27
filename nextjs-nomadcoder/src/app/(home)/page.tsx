// root page

export const metadata = {
  title: 'Home',
};

const URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovie() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const resp = await fetch(URL);
  const json = await resp.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovie();

  return <div>{JSON.stringify(movies)}</div>;
}
