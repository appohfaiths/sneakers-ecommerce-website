import Logo from './Logo';
import Navbar from './Navbar';
import Cart from '../../cart/Cart';
import Profile from '../../userProfile/Profile';

export default function Header() {
  return (
    <header className="container mx-auto py-5">
      <div className="flex justify-between ">
        <div className="flex gap-4 md:gap-10">
          <Logo />
          <div className="hidden md:block">
            <Navbar />
          </div>
        </div>
        <div className="flex gap-4 md:gap-10">
          <Cart />
          <Profile />
        </div>
      </div>
      <hr className="bg-slate-200 my-2" />
    </header>
  );
}
