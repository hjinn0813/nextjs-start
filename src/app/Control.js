// 클라이언트 컴포넌트

'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Control() {
  const params = useParams();
  const id = params.id;

  return (
    <ul>
      <li>
        <Link href="/create">CREATE</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={'/update/' + id}>UPDATE</Link>
          </li>
          <li>
            <input type="button" value="delete" />
          </li>
        </>
      ) : null}
    </ul>
  );
}
