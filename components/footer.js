import Image from "next/image";
import Link from "next/link";
import Linkedin from "../public/Linkedin.svg";
import Email from "../public/email.svg";
import Instagram from "../public/instagram.svg";
import Twitter from "../public/twitter.svg";
import Logo from "../public/Logo.svg"; 

const Footer = () => {
  return (
    <footer className="bg-lightblue text-dark py-24 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Logo and Copyright - Centered on mobile, left-aligned on large screens */}
        {/* md:flex-row items-center md:items-start md:justify-between */}
        <div className="flex flex-col md:flex-row md:justify-between">

          <div className="flex flex-col items-cent mt-4 items-start order-last md:order-first">
            <Image src={Logo} alt="Tech Analytics Logo" width={100} height={50} />
            <p className="font-hanken text-sm mt-2">&copy; 2025 Nest Analytics</p>
          </div>

          {/* Navigation Links */}
          <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left md:text-left mt-6 md:mt-0 order-first md:order-last">
            {/* Cloud Services */}
            <div>
              <h3 className="font-crimson font-bold text-lg mb-2">Cloud Services</h3>
              <ul className="font-hanken space-y-3">
                <li>Virtual machines</li>
                <li>Storage services</li>
                <li>Networking</li>
                <li>Compliance management</li>
                <li>Technical consultation</li>
              </ul>
            </div>

            {/* Infrastructure */}
            <div>
              <h3 className="font-crimson font-bold text-lg mb-2">Infrastructure</h3>
              <ul className="font-hanken space-y-1">
                <li>Security management</li>
                <li>Technical support</li>
                <li>Database management</li>
              </ul>
            </div>

            {/* Academy */}
            <div>
              <h3 className="font-crimson font-bold text-lg mb-2">Academy</h3>
              <ul className="font-hanken space-y-1">
                <li>Learn a tech skill with us</li>
                <li>Our commitment</li>
              </ul>
            </div>
          </div>

        {/* Social Media Icons - Centered on all screens */}
        <div className="flex  space-x-6 mt-10">
          <Link href="https://linkedin.com" target="_blank">
            <Image priority src={Linkedin} alt="LinkedIn" />
          </Link>
          <Link href="mailto:info@example.com">
            <Image priority src={Email} alt="LinkedIn" />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <Image priority src={Instagram} alt="LinkedIn" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Image priority src={Twitter} alt="LinkedIn" />
          </Link>
        </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

