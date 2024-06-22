import React from "react";
import Features from "../Features/features";


// Feature data is basiaclly a api call and the data is recieved in the form of an array of objects
const FeatureData = [
  {
    category: "#Investing",
    iconSrc: "./features/flagShip.svg",
    title: "Flagship Strategies",
    description:
      "Custom stock baskets based on fundamentals and quant models. Timely stock rebalances included to ensure steady returns.",
  },
  
  {
    category: "#Trading",
    iconSrc: "./features/FandO.svg",
    title: "F&O Signals",
    description:
      "Real-time F&O trading research including index option spreads. One-click execution with your broker.",
  },
  {
    category: "",
    iconSrc: "./features/exclusiveIdeas.svg",
    title: "Exclusive Ideas",
    description:
      "Stocks promising fast movement identified by our research team. Good time to enter and exit prompts included.",
  },
  {
    category: "",
    iconSrc: "./features/tradeSafe.svg",
    title: "TradeSafe",
    description:
      "Options selling with automated credit spreads for 1-3% monthly returns. Unlimited capital deployment included.",
  },
];



export default function FeatureGrid() {
  return (
    <div className="flex w-[474px] h-[475px] flex-wrap justify-between p-6">
      {FeatureData.map((feature, index) => (
        <Features
          key={index}
          category={feature.category? feature.category : ""}
          image={feature.iconSrc}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
