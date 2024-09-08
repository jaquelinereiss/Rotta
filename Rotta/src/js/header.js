export function carregarCabecalho() {
    var cabecalhoHTML = `
        <header class="bg-blue-900 text-white py-4">
            <nav class="container mx-auto flex justify-center">
                <ul class="flex space-x-6">
                    <li><a href="#" class="text-white hover:underline">Home</a></li>
                    <li><a href="#" class="text-white hover:underline">Sobre</a></li>
                    <li><a href="#" class="text-white hover:underline">Destinos</a></li>
                    <li><a href="#" class="text-white hover:underline">Contato</a></li>
                    <li><a href="#" class="text-white hover:underline">Reserve agora</a></li>
                </ul>
            </nav>
        </header>
    `;

    document.querySelector('body').insertAdjacentHTML('afterbegin', cabecalhoHTML);
};

document.addEventListener('DOMContentLoaded', carregarCabecalho);
