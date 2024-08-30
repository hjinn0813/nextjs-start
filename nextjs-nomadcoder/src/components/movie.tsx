// movie comp

'use client';

import Link from 'next/link';
import style from '../styles/movie.module.css';
import { useRouter } from 'next/navigation';

interface IMovieProps {
  title: string;
  id: string;
  poster_path: string;
}

export default function movie({ id, poster_path, title }: IMovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className={style.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
