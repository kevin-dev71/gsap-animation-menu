import Link from 'next/link';

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
    </header>
  );
};
export default Header;
