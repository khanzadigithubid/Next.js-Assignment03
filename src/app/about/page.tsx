import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <section className="p-4">
        <br />
        <h2 className="text-4xl text-center font-bold">About Us 🌟</h2>
        <br />
        <p className='text-center'>
          Welcome to Scarf Boutique, where we offer a variety of scarves for every occasion. 🧣✨ Our mission is to provide high-quality, stylish scarves that enhance your wardrobe and express your unique style. Whether you're looking for a chic accessory for a night out or a cozy wrap for chilly days, we've got you covered! 💖
        </p>
        <br />
        <h3 className="text-3xl mt-4 text-center font-bold">Our Values 🌱</h3>
        <p className='text-center mt-2'>
          At Scarf Boutique, we believe in the power of accessories to transform an outfit and boost confidence. Our commitment to quality ensures that each scarf is crafted with care, using the finest materials to provide comfort and style. We also prioritize sustainability by sourcing eco-friendly fabrics and supporting ethical production practices. 🌍💚
        </p>
        <br />
        <h3 className="text-3xl mt-4 text-center font-bold">Our Collection 🎉</h3>
        <p className='text-center mt-2'>
          Explore our diverse collection of scarves, from elegant silk pieces perfect for formal occasions to cozy wool options for winter warmth. Each scarf is designed to cater to different tastes and styles, ensuring that there’s something for everyone. We regularly update our collection to bring you the latest trends and timeless classics. 🌈🧣
        </p>
        <br />
        <h3 className="text-3xl mt-4 text-center font-bold">Benefits of Wearing Scarves 🌈</h3>
        <br />
        <ul className="list-disc list-inside mt-2 text-center">
          <li>🌬️ **Versatile Fashion Statement:** Scarves can be styled in countless ways to complement any outfit.</li>
          <li>🛡️ **Protection from the Elements:** They provide warmth in winter and shield you from the sun in summer.</li>
          <li>✨ **Accessorize Effortlessly:** A scarf can elevate a simple look with minimal effort.</li>
          <li>💼 **Perfect for Any Occasion:** From casual outings to formal events, scarves are suitable for all settings.</li>
          <li>💖 **Express Your Personality:** With various colors and patterns, scarves allow you to showcase your unique style.</li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default About;
