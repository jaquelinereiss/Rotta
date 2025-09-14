import type { Destination } from "../types";
import type { AllDestinations } from "../types";

export const destinations: Destination[] = [
  { city: 'Rio de Janeiro', country: 'Brasil', price: "360", description: 'Desfrute das praias e da cultura vibrante do Brasil', image: 'destination-1.jpg' },
  { city: 'Tóquio', country: 'Japão', price: "6800", description: 'Explore a vibrante metrópole japonesa, rica em cultura e tecnologia', image: 'destination-2.jpg' },
  { city: 'Paris', country: 'França', price: "4500", description: 'Descubra a cidade da luz com suas encantadoras ruas e monumentos icônicos', image: 'destination-3.jpg' },
  { city: 'Veneza', country: 'Itália', price: "4200", description: 'Experimente a energia e tradicionalidade da cultura italiana', image: 'destination-4.jpg' },
];

export const allDestinations: AllDestinations[] = [
  { city: 'São Paulo', country: 'Brasil', price: "360", image: 'sao-paulo-brasil.jpg' },
  { city: 'Bahia', country: 'Brasil', price: "1380", image: 'bahia-brasil.jpg' },
  { city: 'Rio de Janeiro', country: 'Brasil', price: "360", image: 'rio-de-janeiro-brasil.jpg' },
  { city: 'Recife', country: 'Brasil', price: "360", image: 'boa-viagem-recife-brasil.jpg' },
  { city: 'Brasília', country: 'Brasil', price: "360", image: 'brasilia-brasil.jpg' },
  { city: 'Fortaleza', country: 'Brasil', price: "360", image: 'fortaleza-ceara-brasil.jpeg' }
]