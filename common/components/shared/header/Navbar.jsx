import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-5">
        <li>
          <Link href="/collections">collections</Link>
        </li>
        <li>
          <Link href="/men">men</Link>
        </li>
        <li>
          <Link href="/women">women</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}
