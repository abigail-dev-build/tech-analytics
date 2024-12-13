import Image from "next/image";
import Logo from "../../public/Logo.svg";
import NavMenu from "./menu";
import PrimaryButton from "../button";

const Navbar = ({ bgColor }) => {
  return (
    <div className={`flex flex-row pt-10 px-20 justify-between ${bgColor}`}>
      <div class="w-2/12">
        <Image priority src={Logo} alt="Logo" />
      </div>
      <div class="pt-5 w-8/12 flex justify-center gap-x-14">
        <NavMenu />
      </div>
      <div class="w-2/12">
        <PrimaryButton>Contact us</PrimaryButton>
      </div>
    </div>
  );
};
export default Navbar;
