import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Contact = () => {
  return (
    <div>
      <Header />
      <br />
      <section className="p-4">
        <br />
        <h2 className="text-3xl font-bold text-center">📞 Contact Us</h2>
        <br />
        <form>
          <div className="mb-4">
            <label className="block mb-2">👤 Name</label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">📧 Email</label>
            <input type="email" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">📞 Phone Number</label>
            <input type="tel" className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label className="block mb-2">💬 Message</label>
            <textarea className="w-full p-2 border rounded" rows={4} required></textarea>
          </div>
          <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition duration-300">
            🚀 Send Message
          </button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
