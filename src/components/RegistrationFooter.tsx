export function RegistrationFooter() {
    return (
        <section className="sectionRotta-RegistrationFooter newsletter py-16 bg-blue-900 text-white">
            <div className="RegistrationFooter-container container mx-auto px-4 text-center">
                <h2 className="RegistrationFooter-title text-3xl font-bold mb-6">Receba ofertas especiais, crie rotas personalizadas e muito mais.</h2>
                <form className="RegistrationFooter-form flex flex-col items-center">
                    <input type="nome" placeholder="Informe o seu nome" className="RegistrationFooter-inputName p-3 rounded border border-gray-300 mb-4 w-full md:w-1/2 text-gray-700 focus:outline-none"/>
                    <input type="email" placeholder="Digite o seu melhor e-mail" className="RegistrationFooter-inputEmail p-3 rounded border border-gray-300 mb-4 w-full md:w-1/2 text-gray-700 focus:outline-none"/>
                    <button type="submit" className="RegistrationFooter-buttonregister z-10 relative items-center justify-center rounded-md transition-all font-medium 2xl:px-6 2xl:py-3.5 px-5 py-3 hover:bg-blue-500 border hover:border-blue-500 inline-flex">Registrar</button>
                </form>
                <div className="hasRegistration-container flex flex-wrap justify-center items-center gap-1 2xl:px-6 2xl:py-3.5 px-5 py-3">
                    <p className="hasRegistration-paragraph text-1xl font-italic">Já possui um registro?</p>
                    <a href="#" className="hasRegistration-linkLogin font-bold 2xl:px-2 2xl:py-2 px-2 py-2 rounded-md border border-transparent hover:text-blue-500 transition hover:border-blue-500">Conecte-se</a>
                </div>
            </div>
        </section>
    );
}