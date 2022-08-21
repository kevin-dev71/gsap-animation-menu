import Link from 'next/link';
import { Hamburger } from '@/components/Hamburger';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  // menu button
  const [state, setState] = useState<any>({
    initial: false,
    clicked: null,
    menuName: 'Menu',
  });

  // disabled the menu button
  const [disabledMenu, setDisabledMenu] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setState({
        menuName: 'Menu',
        clicked: false,
      });
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: 'Close',
      });
    } else {
      if (state.clicked === true) {
        setState({
          clicked: !state.clicked,
          menuName: 'Menu',
        });
      } else if (state.clicked === false) {
        setState({
          clicked: !state.clicked,
          menuName: 'Close',
        });
      }
    }
  };

  const disableMenu = () => {
    setDisabledMenu(!disabledMenu);
    setTimeout(() => {
      setDisabledMenu(false);
    }, 1200);
  };

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
              <button disabled={disabledMenu} onClick={handleMenu}>
                Menu
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};
export default Header;
