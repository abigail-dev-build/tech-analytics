import { useRouter } from "next/router";
import navItems from "./navlink";
import Link from "next/link";
import Image from "next/image";
import { checkUrl } from "../helpers";
import blueArrow from "../../public/blue-arrow.svg";

const NavMenu = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="space-y-4 md:space-y-0 md:flex md:items-center md:space-x-8">
      {navItems.map((item) => {
        const { label, url, icon } = item;
        const isCurrentPage = checkUrl(pathname, url);

        return (
          <Link key={label} href={url} className="group">
            <span 
              className={`${
                isCurrentPage ? "text-blue" : "text-dark"
              } hover:text-blue font-hanken flex flex-row md:flex-col text-lg font-medium pb-3`}
            >
              {label}
            </span>
            {icon && (
              <Image
                src={isCurrentPage ? blueArrow : icon}
                alt={`${label} dropdown icon`}
                width={16}
                height={16}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default NavMenu;
