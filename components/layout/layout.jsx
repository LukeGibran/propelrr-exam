import MainNav from "../MainNav/mainNav";
import MobileNav from "../MobileNav/mobileNav";

const Layout = ({ children }) => {
  return (
    <>
      {/* <MainNav /> */}
      <MobileNav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
