import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "../../public/Logo.svg";
import NavMenu from "./menu";
import PrimaryButton from "../button";
import HamburgerIcon from "../../public/hamburger.svg";
import CloseIcon from "../../public/cancel-icon.svg";

const Navbar = ({ bgColor }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogoClick = () => {
      router.push("/"); // Next.js client-side navigation
  };

  return (
      <div className={`fixed top-0 left-0 w-full z-50 bg-offwhite ${bgColor}`}>
        <div className="flex flex-row justify-between px-6 md:px-20 py-6 md:py-10">
          {/* Logo */}
          <div className="cursor-pointer" onClick={handleLogoClick}>
            <Image priority src={Logo} alt="Logo" width={100} height={50} />
          </div>

          {/* Large Screen Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <NavMenu />
          </div>

          {/* Contact Button (Hidden on Mobile) */}
          <div className="hidden md:block">
            <PrimaryButton>
            <a href="mailto:info@nestanalytics.org">Contact us</a></PrimaryButton>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            {!mobileMenuOpen && (
              <Image
                src={HamburgerIcon}
                alt="menu icon"
                width={24}
                height={24}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 pt-14 flex items-start justify-center">
            <div className="bg-offwhite rounded-xl shadow-lg p-6 w-10/12 max-w-sm">
              
              <div
                className="flex justify-between items-center mb-4"
                onClick={handleLogoClick}
              >
                <Image src={Logo} alt="Logo" width={80} height={40} />
                <button
                  className="focus:outline-none"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image
                    src={CloseIcon}
                    alt="close icon"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <div className="bg-sky rounded-lg py-2.5 px-5">
                <NavMenu />
              </div>
            </div>
          </div>
        )}
      </div>
  );
};

export default Navbar;
