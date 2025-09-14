import type { AllDestinations } from "../types";

interface Props {
    allDestinations: AllDestinations;
}

export function AllDestinationsCard({ allDestinations }: Props) {
    return (
        <div className="allDestinations-card bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 duration-300 overflow-hidden">
        <img src={new URL(`../assets/${allDestinations.image}`, import.meta.url).href} alt={`imagem ${allDestinations.city}`} className="w-full h-48 object-cover"/>
        <div className="allDestinations-card-Content p-4 text-center">
            <h3 className="font-bold text-xl mb-2">{allDestinations.city}</h3>
            <p className="text-gray-500">A partir de</p>
            <p className="font-bold text-2xl text-black">R${allDestinations.price}</p>
            <button className="mt-4 py-2 px-4 border border-blue-900 text-blue-900 rounded transition-colors duration-300 hover:bg-blue-900 hover:text-white hover:border-blue-900">Ver mais</button>
        </div>
    </div>
  );
}