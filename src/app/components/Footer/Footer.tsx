import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} Scarf Boutique. All rights reserved.</p>
      <div className="p-4 mt-6 text-center">
        <h2 className="text-2xl">Follow Us</h2>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/khanzadi-wazir-ali-7a97832b6/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/khanzadigithubid" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
