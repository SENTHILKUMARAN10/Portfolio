import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { PinContainer } from './3d-pin'
import Image from 'next/image';

const FooterFull = () => {
  return (
    <footer className="bg-black w-screen  text-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Contact Us
        </button>


        <div className="flex justify-center mt-6 space-x-6">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="hover:text-gray-400" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} className="hover:text-gray-400" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="hover:text-gray-400" />
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default FooterFull
