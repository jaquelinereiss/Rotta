export function ServicesOffered() {
    return (
        <section className="sectionRotta-services container-service py-16 bg-gray-100">
            <div className="services-containerItens container mx-auto px-4">
                <h2 className="containerItens-title text-3xl font-bold text-center mb-8">Do voo ao destino, cuidamos de cada detalhe para você.</h2>
                <div className="containerServicesItens flex flex-wrap justify-center gap-6">
                    <div className="servicesItens-item w-48 m-2 bg-white rounded-lg p-2 text-center">
                        <svg className="w-18 h-24 rounded-full mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 576 512">
                            <path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"/>
                        </svg>
                        <div className="servicesItens-item-content">
                            <h3 className="text-center font-bold text-black m-4">Passagens</h3>
                            <p className="text-gray-700 m-2">Encontre mais de 100 destinos para viajar</p>
                            <button className="m-4 bg-blue-900 text-white py-2 px-4 rounded border border-blue-900 transition-colors duration-300 hover:bg-transparent hover:text-blue-900 hover:font-bold">Ver mais</button>
                        </div>
                    </div>
                    <div className="servicesItens-item w-48 m-2 bg-white rounded-lg p-2 text-center">
                        <svg className="w-18 h-24 rounded-full mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 576 512">
                            <path d="M0 32C0 14.3 14.3 0 32 0L480 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-176 0 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 48L32 512c-17.7 0-32-14.3-32-32s14.3-32 32-32L32 64C14.3 64 0 49.7 0 32zm96 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM240 96c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM112 192c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM328 384c13.3 0 24.3-10.9 21-23.8c-10.6-41.5-48.2-72.2-93-72.2s-82.5 30.7-93 72.2c-3.3 12.8 7.8 23.8 21 23.8l144 0z"/>
                        </svg>
                        <div className="servicesItens-item-content">
                            <h3 className="text-center font-bold text-black m-4">Hospedagem</h3>
                            <p className="text-gray-700 m-2">Faça sua reserva nos melhores hoteis</p>
                            <button className="m-4 bg-blue-900 text-white py-2 px-4 rounded border border-blue-900 transition-colors duration-300 hover:bg-transparent hover:text-blue-900 hover:font-bold">Ver mais</button>
                    </div>
                </div>
                <div className="servicesItens-item w-48 m-2 bg-white rounded-lg p-2 text-center">
                    <svg className="w-18 h-24 rounded-full mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 576 512">
                        <path d="M346.3 271.8l-60.1-21.9L214 448 32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-261.9 0 64.1-176.2zm121.1-.2l-3.3 9.1 67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4zM462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5l-.2-6zM107.2 112.9c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8 3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z"/>
                    </svg>
                    <div className="servicesItens-item-content">
                        <h3 className="text-center font-bold text-black m-4">Passeios</h3>
                        <p className="text-gray-700 m-2">Passeios para se divertir na viagem</p>
                        <button className="m-4 bg-blue-900 text-white py-2 px-4 rounded border border-blue-900 transition-colors duration-300 hover:bg-transparent hover:text-blue-900 hover:font-bold">Ver mais</button>
                    </div>
                </div>
                <div className="servicesItens-item w-48 m-2 bg-white rounded-lg p-2 text-center">
                    <svg className="w-18 h-24 rounded-full mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 576 512">
                        <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                    </svg>
                    <div className="servicesItens-item-content">
                        <h3 className="text-center font-bold text-black m-4">Aluguel</h3>
                        <p className="text-gray-700 m-2">Mais conforto para transitar na viagem</p>
                        <button className="m-4 bg-blue-900 text-white py-2 px-4 rounded border border-blue-900 transition-colors duration-300 hover:bg-transparent hover:text-blue-900 hover:font-bold">Ver mais</button>
                    </div>
                </div>
                <div className="servicesItens-item w-48 m-2 bg-white rounded-lg p-2 text-center">
                    <svg className="w-18 h-24 rounded-full mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" height="32" width="36" viewBox="0 0 576 512">
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>  
                    </svg>
                    <div className="servicesItens-item-content">
                        <h3 className="text-center font-bold text-black m-4">Seguro viagem</h3>
                        <p className="text-gray-700 m-2">Viage com segurança e sem preocupações</p>
                        <button className="m-4 bg-blue-900 text-white py-2 px-4 rounded border border-blue-900 transition-colors duration-300 hover:bg-transparent hover:text-blue-900 hover:font-bold">Ver mais</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}