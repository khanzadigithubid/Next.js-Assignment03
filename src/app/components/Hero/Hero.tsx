import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-96" style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
        <h2 className="text-4xl text-white mb-2">Discover the Perfect Scarf 🧣</h2>
        <p className="text-lg text-white mb-4">Find styles that match your personality. ✨</p>
        <Link href="/ScarfList">
          <span className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-400 transition duration-300 cursor-pointer">
            Shop Now 🛍️
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
