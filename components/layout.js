import Navbar from "./navigation/navbar";
import Footer from "./footer";

const Layout = ({ children, bgColor }) => {
  return (
    <div class="flex flex-col h-screen justify-between">
      <Navbar bgColor={bgColor} />
      <div class="bg-offwhite">{children}</div>
      <Footer />
</div>

  );
};

export default Layout;
