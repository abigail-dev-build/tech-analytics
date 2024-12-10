import { useRouter } from "next/router";
import navItems from "./navlink";
import Link from "next/link";
import Image from "next/image";
import { checkUrl } from "../helpers";

const NavMenu = () => {
    const router = useRouter(); // Get the current router object
    const { pathname } = router; // Get the current pathname

    return (
        <>
            {navItems.map((item) => {
                const { label, url, icon } = item;
                const isCurrentPage = checkUrl(pathname, url); // Check if the current path matches the item's URL

                return (
                    <div key={label} className="mb-2">
                        <Link href={url} className="flex items-center space-x-2">
                            <span
                                className={`${
                                    isCurrentPage ? "text-blue" : "text-dark"
                                }`}
                            >
                                {label}
                            </span>
                            {icon && (
                                <Image
                                    src={icon}
                                    alt={`${label} dropdown icon`}
                                    className="w-4 h-4"
                                />
                            )}
                        </Link>
                    </div>
                );
            })}
        </>
    );
};

export default NavMenu;
