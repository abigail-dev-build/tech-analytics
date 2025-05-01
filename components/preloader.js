import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import HeadTag from "./headTag";

const Preloader = ({ finishLoading }) => {
  const [showLogo, setShowLogo] = useState(false);


  useEffect(() => {
    // Show the logo after the div animation
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 2000); // Timing to match the div animation

    // Finish loading after the logo animation
    // const pageTimer = setTimeout(() => {
    //   finishLoading();
    // }, 4000);

    return () => {
      clearTimeout(logoTimer);
      // clearTimeout(pageTimer);
    };
  }, []);

  return (
    <>
    <HeadTag title="" />
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {!showLogo && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="h-full bg-blue"
            style={{ width: "179px" }}
            initial={{ x: "-50%", y: 0,  width: "90px" }}
            animate={{ x: "-50vw", y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.div
            className="h-full bg-sky"
            style={{ width: "179px" }}
            initial={{ x: "50%", y: 0 }}
            animate={{ x: "50vw", y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
      )}

      {showLogo && (
          <motion.div
          className="flex items-center justify-center h-screen"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
        <div className="flex flex-col items-center">
          <Image src="/Logo.svg" alt="Logo" width={300} height={300} />
            </div>
        </motion.div>

      )}
    </div>
    </>
  );
};

export default Preloader;
