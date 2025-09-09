const popularDestinations = [
  { id: 1, cidade: 'Rio de Janeiro', pais: 'Brasil', preco: 360, descricao: 'Desfrute das praias e da cultura vibrante do Brasil', imagem: 'destination-1.jpg' },
  { id: 2, cidade: 'Tóquio', pais: 'Japão', preco: 6800, descricao:'Explore a vibrante metrópole japonesa, rica em cultura e tecnologia', imagem: 'destination-2.jpg' },
  { id: 3, cidade: 'Paris', pais: 'França', preco: 4500, descricao:'Descubra a cidade da luz com suas encantadoras ruas e monumentos icônicos', imagem: 'destination-3.jpg' },
  { id: 4, cidade: 'Veneza', pais: 'Itália', preco: 4200, descricao: 'Experimente a energia e tradicionalidade da cultura italiana', imagem: 'destination-4.jpg' },
];

const carouselInner = document.getElementById('carousel-inner');

// Criar os itens do carrossel de destinos populares
popularDestinations.forEach(destino => {
  const item = document.createElement('div');
  item.className = 'flex-none w-full md:w-1/2 lg:w-1/3 p-4';
  item.innerHTML = `
    <div class="popularDestinations-cardContainer bg-white shadow-lg rounded-lg overflow-hidden">
      <img src="./src/img/${destino.imagem}" alt="${destino.cidade}" class="card-image w-full h-48 object-cover">
      <div class="card-content p-4">
        <h3 class="card-content-title text-xl font-bold mb-2">${destino.cidade}, ${destino.pais}</h3>
        <p class="card-content-text text-gray-700 mb-2">${destino.descricao}</p>
        <p class="card-content-text text-blue-900 font-semibold mb-2">A partir de R$ ${destino.preco}</p>
        <button class="card-contentButton mt-4 py-2 px-4 border border-blue-900 text-blue-900 rounded transition-colors duration-300 hover:bg-blue-900 hover:text-white hover:border-blue-900">Ver destino</button>
      </div>
    </div>
  `;
  carouselInner.appendChild(item);
});

// Configuração do carrossel de destinos populares
let index = 0;
const updateCarousel = () => {
  const width = carouselInner.children[0].offsetWidth;
  carouselInner.style.transform = `translateX(-${index * width}px)`;
};

// Navegação do carrossel de destinos populares
document.getElementById('prevBtn').addEventListener('click', () => {
  index = (index - 1 + popularDestinations.length) % popularDestinations.length;
  updateCarousel();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  index = (index + 1) % popularDestinations.length;
  updateCarousel();
});

// Atualiza o carrossel de destinos populares ao carregar e redimensionar
window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);
