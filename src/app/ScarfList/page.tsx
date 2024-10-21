"use client";

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';
import Image from 'next/image';
import scarf1 from '../public/image/scarf1.jpg';
import scarf2 from '../public/image/scarf2.jpg';
import scarf3 from '../public/image/scarf3.jpg';
import scarf4 from '../public/image/scarf4.jpg';
import scarf5 from '../public/image/scarf5.jpg';
import scarf6 from '../public/image/scarf6.jpg';
import scarf7 from '../public/image/scarf7.jpg';
import scarf8 from '../public/image/scarf8.jpg';
import scarf9 from '../public/image/scarf9.jpg'; 

const scarves = [
  { 
    id: 1, 
    name: 'Silk Scarf', 
    image: scarf1, 
    price: '$25', 
    description: 'Elegant and smooth, perfect for special occasions. ✨ Its luxurious feel makes it a must-have accessory. Ideal for dressing up or adding a pop of color to your outfit.' 
  },
  { 
    id: 2, 
    name: 'Cotton Scarf', 
    image: scarf2, 
    price: '$15', 
    description: 'Lightweight and breathable, ideal for everyday wear. ☀️ Great for layering, it keeps you comfortable in warm weather. Available in various colors to match your style!' 
  },
  { 
    id: 3, 
    name: 'Wool Scarf', 
    image: scarf3, 
    price: '$20', 
    description: 'Warm and cozy, great for chilly days. ❄️ The soft texture feels great against your skin. Perfect for bundling up while still looking stylish!' 
  },
  { 
    id: 4, 
    name: 'Cashmere Scarf', 
    image: scarf4, 
    price: '$45', 
    description: 'Luxuriously soft and warm for ultimate comfort. 💖 An investment piece that adds elegance to any look. Its timeless design makes it a versatile accessory.' 
  },
  { 
    id: 5, 
    name: 'Linen Scarf', 
    image: scarf5, 
    price: '$30', 
    description: 'Light and airy, perfect for summer outfits. 🌼 Its breathable fabric helps keep you cool. Available in trendy patterns for a chic summer vibe!' 
  },
  { 
    id: 6, 
    name: 'Pashmina Scarf', 
    image: scarf6, 
    price: '$50', 
    description: 'Beautifully crafted, adds elegance to any look. 🌹 Lightweight yet warm, perfect for transitions between seasons. A versatile piece for any wardrobe!' 
  },
  { 
    id: 7, 
    name: 'Printed Scarf', 
    image: scarf7, 
    price: '$20', 
    description: 'Fun patterns to express your unique style. 🎨 This scarf is perfect for making a bold statement. Use it to accessorize any outfit with flair!' 
  },
  { 
    id: 8, 
    name: 'Infinity Scarf', 
    image: scarf8, 
    price: '$28', 
    description: 'Versatile and stylish, perfect for layering. 🔄 Easily wraps around for a snug fit. Available in various styles to complement any outfit!' 
  },
  { 
    id: 9, 
    name: 'Fringe Scarf', 
    image: scarf9, 
    price: '$22', 
    description: 'Trendy fringes for a boho-chic look. 🌈 This scarf adds a playful touch to your ensemble. Perfect for casual outings or beach days!' 
  }, 
];

const ScarfList = () => {
  return (
    <div>
      <Header />
      <section className="p-4">
        <br/>
        <h2 className="text-4xl text-center font-bold font-sans">Our Scarf</h2>
        <br />
        <br/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {scarves.map(scarf => (
            <div key={scarf.id} className="border rounded-lg overflow-hidden">
              <Link href={`/products/${scarf.id}`}>
                <Image
                  src={scarf.image}
                  alt={scarf.name}
                  className="w-full h-48 object-cover cursor-pointer"
                  layout="responsive"
                  width={500} // Adjust these values as needed
                  height={300} // Adjust these values as needed
                />
              </Link>
              <div className="p-4">
                <h3 className="text-xl">{scarf.name}</h3>
                <p className="text-gray-600">{scarf.price}</p>
                <p className="text-gray-500 mt-1">{scarf.description}</p> {/* Added description */}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ScarfList;
