import { useEffect } from "react";
import { useRouter } from "next/router";

const LinkedIn = () => {
  const router = useRouter();

  useEffect(() => {
    window.location.href = "https://www.linkedin.com/";
  }, []);

  return <p>Redirecting to LinkedIn...</p>;
};

export default LinkedIn;
