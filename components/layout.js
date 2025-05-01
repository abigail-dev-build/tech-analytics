import Navbar from "./navigation/navbar";
import Footer from "./footer";

const Layout = ({ children, bgColor }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar bgColor={bgColor} />
      <main className="flex-grow bg-offwhite pt-20">{children}</main>
      <Footer />
</div>

  );
};

export default Layout;
