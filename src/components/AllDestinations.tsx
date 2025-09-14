import { allDestinations } from "../data/destinations";
import { AllDestinationsCard } from "./AllDestinationsCard";

export function AllDestinations() {
  return (
    <section className="sectionRotta-destinations container-service py-16 bg-gray-100">
        <div className="destinations-container container mx-auto px-4 lg:px-8 max-w-7xl">
            <h2 className="destinations-title text-3xl font-bold text-center mb-8">Viajar é ser feliz. Conheça destinos imperdíveis.</h2>
            <div className="destinations-itens grid grid-cols-1 md:grid-cols-3 gap-4">
                {allDestinations.map((dest, index) => (
                    <AllDestinationsCard key={index} allDestinations={dest} />
                ))}
            </div>
            <div className="destinations-buttonAllDestinations text-center mt-8">
                <button className="m-4 bg-blue-900 text-white py-2 px-4 rounded border border-blue-900 transition-colors duration-300 hover:bg-transparent hover:text-blue-900 hover:font-bold">Ver todos os destinos</button>
            </div>
        </div>
    </section>
  );
}