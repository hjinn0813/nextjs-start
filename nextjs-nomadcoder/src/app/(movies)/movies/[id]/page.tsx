// movie:id page

import { API_URL } from '../../../(home)/page';

export const metadata = {
  title: 'Movie',
};

async function getMovie(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const resp = await fetch(`${API_URL}/${id}`);
  return resp.json();
}

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const resp = await fetch(`${API_URL}/${id}/videos`);
  return resp.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  return <h1>{movie.title}</h1>;
}
