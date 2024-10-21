import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 md:p-6 lg:p-8">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">🧣 Scarf Boutique</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-300 transition duration-300">
                🏠 Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-300 transition duration-300">
                ℹ️ About
              </Link>
            </li>
            <li>
              <Link href="/ScarfList" className="hover:text-blue-300 transition duration-300">
                🧣 ScarfList
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-300 transition duration-300">
                📞 Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
