// movie:id page

import { Suspense } from 'react';
import MovieInfo from '../../../../components/movie-info';
import MovieVideos from '../../../../components/movie-videos';

export const metadata = {
  title: 'Movie',
};

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <Suspense fallback={<h2>Loading movie info..⌛</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading movie videos..⌛</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
}
