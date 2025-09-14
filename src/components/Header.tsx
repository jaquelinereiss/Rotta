export function Header() {
  return (
    <header className="headerRotta bg-blue-900 text-white py-4">
      <nav className="nav-container container mx-auto flex justify-center">
        <ul className="list-container flex space-x-6">
          <li className="list-item">
            <a href="#" className="text-white no-underline hover:text-blue-500">Home</a>
          </li>
          <li className="list-item">
            <a href="#" className="text-white no-underline hover:text-blue-500">Sobre</a>
          </li>
          <li className="list-item">
            <a href="#" className="text-white no-underline hover:text-blue-500">Destinos</a>
          </li>
          <li className="list-item">
            <a href="#" className="text-white no-underline hover:text-blue-500">Contato</a>
          </li>
          <li className="list-item">
            <a href="#" className="text-white no-underline hover:text-blue-500">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
