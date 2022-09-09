import Link from 'next/link';

export default function Logo() {
  return (
    <div className="hover:cursor-pointer">
      <Link href="/">
        <img src="/assets/images/logo.svg" alt="sneakers Logo" />
      </Link>
    </div>
  );
}
