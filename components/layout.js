import Navbar from "./navigation/navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div class="flex flex-col h-screen justify-between">
      <Navbar />
      <div class="bg-offwhite">{children}</div>
      <Footer />
</div>

  );
};

export default Layout;
