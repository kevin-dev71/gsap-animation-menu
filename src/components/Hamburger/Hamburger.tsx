import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import dallas from '@/images/dallas.webp';
import austin from '@/images/austin.webp';
import beijing from '@/images/beijing.webp';
import newyork from '@/images/newyork.webp';
import sanfrancisco from '@/images/sanfrancisco.webp';

const cities = [
  { name: 'Dallas', image: dallas },
  { name: 'Austin', image: austin },
  { name: 'New York', image: newyork },
  { name: 'San Francisco', image: sanfrancisco },
  { name: 'Beijing', image: beijing },
];

const Hamburger = ({ state }: { state: any }) => {
  console.log(dallas);
  const menuRef = useRef(null);
  const revealMenuRef = useRef(null);
  const revealMenuBackgroundRef = useRef(null);
  const cityBackgroundRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const menuEl = menuRef.current;
    const revealMenuEl = revealMenuRef.current;
    const revealMenuBackgroundEl = revealMenuBackgroundRef.current;
    const infoEl = infoRef.current;
    const line1El = line1Ref.current;
    const line2El = line2Ref.current;
    const line3El = line3Ref.current;

    if (state.clicked === false) {
      // close our menu
      // menuRef.current.style.display = 'none';
      let anim1 = gsap.to([revealMenuEl, revealMenuBackgroundEl], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menuEl, {
        duration: 1,
        css: { display: 'none' },
      });
      return () => {
        anim1.kill();
      };
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open our menu
      gsap.to(menuEl, {
        duration: 0,
        css: { display: 'block' },
      });
      let anim1 = gsap.to([revealMenuBackgroundEl, revealMenuEl], {
        duration: 0,
        opacity: 1,
        height: '100%',
      });
      staggerReveal(revealMenuBackgroundEl, revealMenuEl);
      fadeInUp(infoEl);
      staggerText(line1El, line2El, line3El);
    }
  }, [state]);

  const staggerReveal = (node1: any, node2: any) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: 'right top',
      skewY: 2,
      ease: 'power3.inOut',
      stagger: { amount: 0.1 },
    });
  };

  const staggerText = (node1: any, node2: any, node3: any) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.1,
      ease: 'power3.inOut',
      stagger: { amount: 0.3 },
    });
  };

  const fadeInUp = (node: any) => {
    gsap.from(node, {
      y: 60,
      duration: 1,
      delay: 0.2,
      opacity: 0,
      ease: 'power3.inOut',
    });
  };

  const handleCity = (city) => {
    const cityBackgroundEl = cityBackgroundRef.current;

    gsap.to(cityBackgroundEl, {
      duration: 0,
      background: `url(${city}) center center`,
    });

    gsap.to(cityBackgroundEl, {
      duration: 0.4,
      opacity: 1,
      ease: 'power3.inOut',
    });

    gsap.from(cityBackgroundEl, {
      duration: 0.4,
      skeyY: 2,
      transformOrigin: 'right top',
    });
  };

  const handleCityReturn = () => {
    const cityBackgroundEl = cityBackgroundRef.current;
    gsap.to(cityBackgroundEl, {
      duration: 0.4,
      opacity: 0,
    });
  };

  const handleOver = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: 'power3.inOut',
    });
  };

  const handleOverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: 'power3.inOut',
    });
  };

  return (
    <div className="hamburger-menu" ref={menuRef}>
      <div
        ref={revealMenuBackgroundRef}
        className="menu-secondary-background-color"
      ></div>
      <div ref={revealMenuRef} className="menu-layer">
        <div ref={cityBackgroundRef} className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link href="/opportunities">
                      <a
                        ref={line1Ref}
                        onMouseEnter={handleOver}
                        onMouseOut={handleOverExit}
                      >
                        Opportunities
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solutions">
                      <a
                        onMouseEnter={handleOver}
                        onMouseOut={handleOverExit}
                        ref={line2Ref}
                      >
                        Solutions
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <a
                        onMouseEnter={handleOver}
                        onMouseOut={handleOverExit}
                        ref={line3Ref}
                      >
                        Contact us
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={infoRef} className="info">
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
                {cities.map((el) => {
                  return (
                    <span
                      key={el.name}
                      onMouseEnter={() => {
                        handleCity(el.image.src);
                      }}
                      onMouseOut={handleCityReturn}
                    >
                      {el.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hamburger;
