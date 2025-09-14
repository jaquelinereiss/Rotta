import type { Destination } from "../types";

interface Props {
  destination: Destination;
}

export function PopularDestinationsCard({ destination }: Props) {
  return (
    <div className="popularDestinations-item h-90 flex flex-col justify-between w-1/3 p-4">
      <div className="popularDestinations-cardContainer bg-white rounded-lg shadow-md overflow-hidden h-90">
        <img src={new URL(`../assets/${destination.image}`, import.meta.url).href} alt={`imagem ${destination.city}`}  className="card-image w-full h-48 object-cover"/>
            <div className="card-content p-4">
                <h3 className="card-content-title text-xl font-bold mb-2">{destination.city}, {destination.country}</h3>
                <p className="card-content-text text-gray-700 mb-2">{destination.description}</p>
                <p className="card-content-text text-blue-900 font-semibold mb-2">A partir de R${destination.price}</p>
                <button className="card-contentButton mt-4 py-2 px-4 border border-blue-900 text-blue-900 rounded transition-colors duration-300 hover:bg-blue-900 hover:text-white hover:border-blue-900">Ver destino</button>
            </div>
        </div>
    </div>
  );
}
