export function carregarCabecalho() {
    var cabecalhoHTML = `
        <header class="headerRotta bg-blue-900 text-white py-4">
            <nav class="nav-container container mx-auto flex justify-center">
                <ul class="list-container flex space-x-6">
                    <li class="list-item"><a href="#" class="text-white no:underline hover:text-blue-500">Home</a></li>
                    <li class="list-item"><a href="#" class="text-white no:underline hover:text-blue-500">Sobre</a></li>
                    <li class="list-item"><a href="#" class="text-white no:underline hover:text-blue-500">Destinos</a></li>
                    <li class="list-item"><a href="#" class="text-white no:underline hover:text-blue-500">Contato</a></li>
                    <li class="list-item"><a href="#" class="text-white no:underline hover:text-blue-500">Login</a></li>
                </ul>
            </nav>
        </header>
    `;

    document.querySelector('body').insertAdjacentHTML('afterbegin', cabecalhoHTML);
};

document.addEventListener('DOMContentLoaded', carregarCabecalho);
