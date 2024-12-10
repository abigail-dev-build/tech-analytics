import Image from "next/image";
import Logo from "../../public/Logo.svg";
import NavMenu from "./menu";

const Navbar = () => {
  return (
    <div class="flex flex-row pt-10 px-20 justify-between bg-offwhite">
      <div class="w-2/12">
        <Image priority src={Logo} alt="Logo" />
      </div>
      <div class="pt-5 w-8/12 flex justify-center gap-x-14">
        <NavMenu />
      </div>
      <div class="w-2/12">
        <button class="bg-blue text-white w-37 h-10.5 py-2.5 px-5 text-base font-medium">
          Contact us
        </button>
      </div>
    </div>

   //  <video autoPlay={true} muted loop id="background-video">
    //       <source src="/video.mp4" type="video/mp4"></source>
    //       <track src="fgsubtitles_en.vtt" kind="subtitles" srclang="en" label="English" default></track>
    //     </video>
  );
};
export default Navbar;
