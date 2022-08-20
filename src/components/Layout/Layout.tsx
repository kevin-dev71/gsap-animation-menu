import { Header } from '@/components/Header';

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="home">{children}</div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
