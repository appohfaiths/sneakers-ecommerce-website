import Image from 'next/image';

export default function Profile() {
  return (
    <div>
      <Image src="/assets/images/image-avatar.png" width={40} height={40} />
    </div>
  );
}
