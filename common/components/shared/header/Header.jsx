import Logo from './Logo';
import Navbar from './Navbar';
import Cart from '../../cart/Cart';
import Profile from '../../userProfile/Profile';

export default function Header() {
  return (
    <header className="px-40 py-5">
      <div className="flex justify-between ">
        <div className="flex gap-10">
          <Logo />
          <Navbar />
        </div>
        <div className="flex gap-10">
          <Cart />
          <Profile />
        </div>
      </div>
      <hr className="bg-slate-200 my-2" />
    </header>
  );
}
