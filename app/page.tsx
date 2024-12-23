"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const carouselContent = [
  {
    title: "Global leader in ECM",
    description:
      "TurnPikeAnalyst is dedicated to helping you maximize the value of your data. When you work with us, you'll have access to highly trained analysts that use cutting-edge methods to glean actionable insights that will aid you in making strategic decisions and propelling rapid expansion. In order to take your company to new heights, we can help you release the data's hidden potential.",
  },
  {
    title: "The Global Leader in ECM and Data Migration",
    description:
      "TurnPikeAnalyst stands as the global leader in ECM (Enterprise Content Management), ETL (Extract, Transform, Load), and ESB (Enterprise Service Bus) solutions. Our state-of-the-art tools and knowledge help companies worldwide streamline their operations, integrate their data without a hitch, and maximize productivity. Work with us to take advantage of these game-changing tools and maintain your position at the forefront of the digital world.",
  },
  {
    title: "Best-in-Class Software",
    description:
      "TurnPikeAnalyst provides industry-leading software products for a wide range of company requirements. Our leading software blends state-of-the-art components with intuitive user interfaces and powerful capabilities to deliver outstanding functionality and results. Take your company to new heights of efficiency and productivity by utilizing top-tier software.",
  },
];

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  return (
    <div>
      <div
      className="min-h-screen bg-cover bg-center text-white flex flex-col"
      style={{
        backgroundImage: "url('https://www.turnpikeanalyst.com/wp-content/uploads/2023/05/6849678_3440660-scaled.jpg')",
      }}
    >
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20 bg-black bg-opacity-50">
        <div className="container px-4">
          <div className="w-full max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {carouselContent.map((item, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <div className="text-center max-w-2xl mx-auto">
                      <h2 className="text-4xl font-bold mb-6">{item.title}</h2>
                      <p className="mb-8 text-gray-300">{item.description}</p>
                      <Button
                        variant="outline"
                        className="bg-transparent text-white border-teal-500 hover:bg-teal-500 hover:text-white transition-colors duration-300"
                      >
                        Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {carouselContent.map((_, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className={`w-2 h-2 rounded-full ${
                    index === current ? "bg-teal-500" : "bg-gray-400"
                  }`}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
    
    </div>
  );
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
