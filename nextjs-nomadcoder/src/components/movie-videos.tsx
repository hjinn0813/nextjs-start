// video component

import { API_URL } from './../app/constants';
import style from '../styles/movie-video.module.css';

async function getVideos(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const resp = await fetch(`${API_URL}/${id}/videos`);
  return resp.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={style.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
