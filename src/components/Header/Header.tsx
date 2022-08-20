import Link from 'next/link';
import { Hamburger } from '@/components/Hamburger';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link href="/">
                <a>HAMBRG.</a>
              </Link>
            </div>
            <div className="menu">
              <button>Menu</button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger />
    </header>
  );
};
export default Header;
