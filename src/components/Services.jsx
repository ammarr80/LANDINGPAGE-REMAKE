import {
  ArrowUpRight,
  Asterisk,
  Layers2,
  Wrench,
  ShieldHalf,
  Box,
  ChartLine,
} from "lucide-react";

const cardsContent = [
  {
    heading: "Production and Assembly",
    description:
      "Details on production processes, assembly, capacity and product types.",
    icon: <Asterisk strokeWidth={1} size={52} />,
  },
  {
    heading: "Custom Manufacturing",
    description:
      "Custom product creation with design and customization options.",
    icon: <Layers2 strokeWidth={1} size={36} />,
  },
  {
    heading: "Quality Control",
    description:
      "Procedures and systems in place to ensure high product quality.",
    icon: <Wrench size={36} strokeWidth={1} />,
  },
  {
    heading: "Technology and Innovation",
    description:
      "Details on the latest manufacturing technologies and ongoing innovations.",
    icon: <ShieldHalf size={40} strokeWidth={1} />,
  },
  {
    heading: "Package and Logistics",
    description:
      "Packaging and logistics for shipping to customers and distributors.",
    icon: <Box size={42} strokeWidth={1} />,
  },
  {
    heading: "Consulting Market Research",
    description:
      "Services to help companies understand market needs and provide strategic advice.",
    icon: <ChartLine size={32} strokeWidth={1} />,
  },
];

export default function Services() {
  return (
    <>
      <section className="bg-brand-dark min-h-[90dvh] py-20">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-4xl font-bold text-white text-center max-w-[24ch] mx-auto">
            Efficient and Integrated Manufacturing Services
          </h2>
          <p className="text-white/90 text-center text-regular text-sm">
            Simplify operations with our efficient, quality-focused services.
          </p>
        </div>

        <div className="w-[90%] mx-auto ">
          <div className="grid grid-cols-3 gap-8 w-full text-white px-4">
            {cardsContent.map((card, index) => (
            <div className="bg-cards py-8 min-h-[35dvh] rounded-2xl max-w-[340px] px-7 flex flex-col">
              <div className="flex items-center justify-between">
                {card.icon}
                <ArrowUpRight strokeWidth={1.5} className="text-xs" />
              </div>
              <div className="mt-auto flex flex-col gap-2">
                <h3 className="font-bold text-lg">{card.heading}</h3>
                <p className="font-regular text-sm max-w-[40ch] text-white/70">
                  {card.description}
                </p>
              </div>
            </div>
            ))} 
            
          </div>
        </div>
      </section>
    </>
  );
}
