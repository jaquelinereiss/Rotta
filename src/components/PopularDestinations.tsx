import { destinations } from "../data/destinations";
import { PopularDestinationsCard } from "./PopularDestinationsCard";

export function PopularDestinations() {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {destinations.map((dest, index) => (
        <PopularDestinationsCard key={index} destination={dest} />
      ))}
    </section>
  );
}
