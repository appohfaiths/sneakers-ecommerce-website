import Image from 'next/image';
import cart from '../../../public/assets/images/icon-cart.svg';

export default function Cart() {
  function openCart() {
    alert('clicked');
  }

  return (
    <>
      <Image
        src={cart}
        width={30}
        height={30}
        layout="fixed"
        className="hover:cursor-pointer"
        onClick={() => openCart()}
      />
    </>
  );
}
