import Link from 'next/link';

const Hamburger = () => {
  return (
    <div className="hamburger-menu">
      <div className="menu-secondary-background-color"></div>
      <div className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link href="/opportunities">
                      <a>Opportunities</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions">
                      <a>Solutions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a>Contact us</a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="info">
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
                  minima nam laborum alias sit adipisci at dolor suscipit sint!
                  In maxime velit expedita incidunt nisi consectetur magnam
                  modi, veritatis harum.
                </p>
              </div>
              <div className="location">
                Locations:
                <span>Dallas</span>
                <span>Austin</span>
                <span>New York</span>
                <span>San Francisco</span>
                <span>Beijing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hamburger;
