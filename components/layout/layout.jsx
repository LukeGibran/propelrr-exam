import MainNav from "../MainHeader/mainNav";

const Layout = ({ children }) => {
  return (
    <>
      <MainNav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
