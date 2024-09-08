const popularDestinations = [
    { 
        id: 1, 
        cidade: 'Rio de Janeiro', 
        pais: 'Brasil', 
        nacional: true, 
        preco: 360,
        descricao: 'Desfrute das praias e da cultura vibrante do Brasil',
        imagem: 'destination-1.jpg'
    }, 
    { 
        id: 2, 
        cidade: 'Tóquio', 
        pais: 'Japão', 
        nacional: false, 
        preco: 6800, 
        descricao:'Explore a vibrante metrópole japonesa, rica em cultura e tecnologia',
        imagem: 'destination-2.jpg', 
    }, 
    { 
        id: 3, 
        cidade: 'Paris', 
        pais: 'França', 
        nacional: false,
        preco: 4500, 
        descricao:'Descubra a cidade da luz com suas encantadoras ruas e monumentos icônicos',
        imagem: 'destination-3.jpg'
    }, 
    { 
        id: 4, 
        cidade: 'Veneza', 
        pais: 'Itália', 
        nacional: false, 
        preco: 4200, 
        descricao: 'Experimente a energia e tradicionalidade da cultura italiana',
        imagem: 'destination-4.jpg', 
    }
];

export function carregarDestinosPopulares() {
    let carouselInner = document.getElementById('carousel-inner');

    popularDestinations.forEach((destino, index) => {
        const activeClass = index === 0 ? 'active' : '';

        const cardPopularDestinations = `
            <div class="carousel-item ${activeClass}">
                <div class="flex items-center bg-white shadow-lg rounded-lg p-4" id="card-destino-${destino.id}">
                    <div class="w-2/2">
                        <img src="./src/img/${destino.imagem}" alt="Destino ${destino.id} da Rotta." class="w-60 rounded " ">
                    </div>
                    <div class="w-2/3 p-4">
                        <h3 class="text-2xl font-bold text-black m-4">${destino.cidade}, ${destino.pais}</h3>
                        <p class="text-gray-700 m-4">${destino.descricao}</p>
                        <p class="m-4 mb-0 text-blue-600 font-semibold">A partir de R$ ${destino.preco}</p>
                        <button class="m-4 bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Ver destino</button>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="20" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" width="20" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                </button>
            </div>
        `;

        carouselInner.innerHTML += cardPopularDestinations;
    });
}

document.addEventListener('DOMContentLoaded', carregarDestinosPopulares);
