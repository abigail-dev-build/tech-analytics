import User1 from "../public/user1.png";
import User2 from "../public/user2.png";
import CompanyLogo from "../public/company-logo.svg";

const testimonials = [
  {
    profileImage: User1,
    logo: CompanyLogo,
    companyName: "Global Trade Ltd",
    testimonial:
      "Tech Analytics cloud optimization strategy saved us £180,000 annually. Importantly, our systems have never been more reliable.",
    name: "James Hamia",
    position: "IT Director",
    country: "United Kingdom",
  },
  {
    profileImage: User2,
    logo: CompanyLogo,
    companyName: "Data Flow System",
    testimonial:
      "Their multi-cloud expertise is outstanding. They helped us optimize our workloads across AWS and Azure, reducing complexity while improving performance.",
    name: "David Kumar",
    position: "Head of Engineering",
    country: "United States",
  },
  {
    profileImage: User1,
    logo: CompanyLogo,
    companyName: "Global Trade Plc",
    testimonial:
      "Tech Analytics cloud optimization strategy saved us £180,000 annually. Importantly, our systems have never been more reliable.",
    name: "James Hamia",
    position: "IT Director",
    country: "United Kingdom",
  },
  {
    profileImage: User1,
    logo: CompanyLogo,
    companyName: "Agridec International",
    testimonial:
      "Tech Analytics cloud optimization strategy saved us £180,000 annually. Importantly, our systems have never been more reliable.",
    name: "James Hamia",
    position: "IT Director",
    country: "United Kingdom",
  },
  {
    profileImage: User2,
    logo: CompanyLogo,
    companyName: "Send wve",
    testimonial:
      "Their multi-cloud expertise is outstanding. They helped us optimize our workloads across AWS and Azure, reducing complexity while improving performance.",
    name: "David Kumar",
    position: "Head of Engineering",
    country: "United States",
  },
  {
    profileImage: User1,
    logo: CompanyLogo,
    companyName: "Revolut Bank",
    testimonial:
      "Tech Analytics cloud optimization strategy saved us £180,000 annually. Importantly, our systems have never been more reliable.",
    name: "James Hamia",
    position: "IT Director",
    country: "United Kingdom",
  },
  ];

 const checkUrl = (pathname, url) => {
    // Normalize the paths to avoid issues with trailing slashes
    const normalizePath = (path) => path?.replace(/\/+$/, "").toLowerCase();

    return normalizePath(pathname) === normalizePath(url);
};



  const CapitalizeFirstLetter = (string) => {
    const arr = string?.split(' ');
  
    for (let i = 0; i < arr?.length; i++) {
      arr[i] = arr[i]?.charAt(0).toUpperCase() + arr[i]?.slice(1);
    }
  
    return arr?.join(' ');
  };

  export { checkUrl, CapitalizeFirstLetter, testimonials }