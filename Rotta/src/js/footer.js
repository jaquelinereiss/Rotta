export function carregarRodape() {
    console.log("Função carregarRodape chamada.");
    var rodapeHTML = `
        <footer class="bg-blue-900 text-white py-6">
            <div class="container mx-auto text-center">
                <p>&copy; 2024 Rotta. Todos os direitos reservados.</p>
            </div>
        </footer>
    `;
    document.querySelector('body').insertAdjacentHTML('beforeend', rodapeHTML);
};

document.addEventListener('DOMContentLoaded', carregarRodape);
