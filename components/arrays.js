import CustomerSatisfaction from "../public/pictures/customer_satisfaction.png";
import CostOptimization from "../public/pictures/CostOptimization.png";
import ScalabilityImage from "../public/pictures/ScalabilityImage.png";
import HumanIcon from "../public/human_icon.svg";
import MoneyIcon from "../public/money_icon.svg";
import LoadingIcon from "../public/loading.svg";

const content = [
    {
      paragraph:
        "Because your success is the only metric that matters to us. That is why we work with your business objectives while building solutions around your workflow that brings growth.",
      list: [
        "Regular strategy reviews",
        "Proactive optimisation",
        "24/7 expert support",
      ],
      image: CustomerSatisfaction,
    },
    {
      paragraph:
        "Because your success is the only metric that matters to us. That is why we work with your business objectives while building solutions around your workflow that brings growth.",
      list: [
        "Regular strategy",
        "Proactive optim",
        "24/7 expert sup",
      ],
      image: CostOptimization,
    },
    {
      paragraph:
        "Because your success is the only metric that matters to us. That is why we work with your business objectives while building solutions around your workflow that brings growth.",
      list: [
        "Regular",
        "Proactive",
        "24/7 expert",
      ],
      image: ScalabilityImage,
    },
  ];

  const cardContent = [{icon: HumanIcon, text: "We are YOU focused. Our goal is to help you reach your goals"}, {icon: MoneyIcon, text: "Cost optimisation with quality job retained"}, {icon: LoadingIcon, text: "From infrastructure to scalability, one team handles your needs"}]

  export { content, cardContent }