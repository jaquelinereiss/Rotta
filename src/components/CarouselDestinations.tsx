import { useRef, useState } from "react";
import { destinations } from "../data/destinations";
import { PopularDestinationsCard } from "./PopularDestinationsCard";

export function CarouselDestinations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 3; 
  const containerRef = useRef<HTMLDivElement>(null);

  const prevSlide = () =>
    setCurrentIndex((i) => Math.max(i - visibleCards, 0));
  const nextSlide = () =>
    setCurrentIndex((i) =>
      Math.min(i + visibleCards, destinations.length - visibleCards)
    );

  return (
    <section className="sectionRotta-popularDestinations popular-category py-10 bg-gray-100">
        <div className="popularDestinations-container container mx-auto">
            <h2 className="popularDestinations-title text-center text-black text-4xl font-bold mb-8">Destinos populares</h2>
            <div className="popularDestinations-carousel relative w-3/4 mx-auto overflow-hidden">
                <div ref={containerRef} className="popularDestinations-carouselInner flex transition-transform duration-500" style={{transform: `translateX(-${(currentIndex / destinations.length) * 100}%)`,width: `${(destinations.length / visibleCards) * 100}%`,}}>
                    {destinations.map((dest, index) => (
                    <PopularDestinationsCard key={index} destination={dest}/>
                    ))}
                </div>

                <button onClick={prevSlide} className="popularDestinations-carouselButtonPrev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white px-4 py-2 mt-4 rounded-full shadow">&#10094;</button>
                <button onClick={nextSlide} className="popularDestinations-carouselButtonNext absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white px-4 py-2 mt-4 rounded-full shadow">&#10095;</button>
            </div>
        </div>
    </section>
  );
}
