// navigation comps

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === '/' ? '👈' : ''}
        </li>
        <li>
          <Link href="/About">About</Link>
          {path === '/About' ? '👈' : ''}
        </li>
      </ul>
    </nav>
  );
}
