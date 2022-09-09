import Image from 'next/image';
import cart from '../../../public/assets/images/icon-cart.svg';

export default function Cart() {
  return (
    <>
      <Image src={cart} width={30} height={30} layout="fixed" />
    </>
  );
}
