import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar title="Brand" />
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
};
