// navigation comps

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import style from '../styles/navigation.module.css';

export default function navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);

  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li>
          <Link href="/">Home</Link>
          {path === '/' ? '👈' : ''}
        </li>
        <li>
          <Link href="/About">About</Link>
          {path === '/About' ? '👈' : ''}
        </li>
        <li>
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}
