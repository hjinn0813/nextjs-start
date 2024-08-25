// movie:id page

export const metadata = {
  title: 'Movie',
};

export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h1>Movie {id}</h1>;
}
