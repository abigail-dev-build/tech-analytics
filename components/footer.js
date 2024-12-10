import Image from "next/image";
import Logo from "../public/Logo.svg";
import Copyright from "../public/Copyright.svg";
import Linkedin from '../public/Linkedin.svg';
import Email from "../public/email.svg";
import Instagram from "../public/instagram.svg";
import Twitter from "../public/twitter.svg";

const Footer = () => {
  return (
    <footer class="w-full min-h-96 py-10 bg-gray">
      <div class="w-4/5 mx-auto grid grid-cols-3 gap-20 ">
        <div class="">
          <Image priority src={Logo} alt="Logo" />
          <div class="flex gap-2 mt-8">
            <Image priority src={Copyright} alt="copyright" />
            <p class="text-dark font-medium text-lg">2024 Tech Analytics</p>
          </div>
        </div>
        <div class="col-span-2 grid grid-cols-3 gap-10 ml-12">
            <div class="">
                <h6 class="text-dark font-semibold text-xl">Our services</h6>
                <p class="text-grey font-normal text-base mt-4">Compute</p>
                <p class="text-grey font-normal text-base mt-4">Storage hosting</p>
                <p class="text-grey font-normal text-base mt-4">Databases</p>
                <p class="text-grey font-normal text-base mt-4">Web development</p>
                <p class="text-grey font-normal text-base mt-4">Technical consultation</p>
                <p class="text-grey font-normal text-base mt-4">Learn a tech skill with us</p>
            </div>
            <div><h6 class="text-dark font-semibold text-xl">Contact</h6>
            <p class="text-grey font-normal text-base mt-4">Send a mail</p>
            <p class="text-grey font-normal text-base mt-4">Instagram</p>
            <p class="text-grey font-normal text-base mt-4">LinkedIn</p>
            </div>
            <div><h6 class="text-dark font-semibold text-xl">About us</h6>
            <p class="text-grey font-normal text-base mt-4">What we do</p>
            <p class="text-grey font-normal text-base mt-4">Our commitment</p>
            </div>
        </div>
      </div>
      <div class="w-52 mx-auto mt-12 flex justify-between">
      <Image priority src={Linkedin} alt="LinkedIn" />
      <Image priority src={Email} alt="Email" />
      <Image priority src={Instagram} alt="Instagram" />
      <Image priority src={Twitter} alt="Twitter" />
      </div>
    </footer>
  );
};

export default Footer;
