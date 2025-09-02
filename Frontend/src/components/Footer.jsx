import React from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="bg-gradient-to-r from-white via-pink-50 to-purple-50 text-gray-700 pt-16 pb-8 px-4">
      <div  className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        {/* Logo & Brand */}
        <div>
          <div className="flex items-center gap-2 text-xl font-bold text-gray-900">
            <div className="bg-blue-600 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold">
              B
            </div>
            Ook Store
          </div>
        </div>

        {/* Column 1 */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Information</h4>
          <ul className="space-y-1">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Categories</h4>
          <ul className="space-y-1">
            <li><a href="#">Cosmetic</a></li>
            <li><a href="#">Clothing</a></li>
            <li><a href="#">Jewelry</a></li>
            <li><a href="#">Watches</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Social</h4>
          <ul className="space-y-1">
            <li><a href="#"><FaYoutube className="inline mr-1" /> YouTube</a></li>
            <li><a href="#"><FaInstagram className="inline mr-1" /> Instagram</a></li>
            <li><a href="#"><FaTwitter className="inline mr-1" /> Twitter</a></li>
            <li><a href="#"><FaWhatsapp className="inline mr-1" /> Whatsapp</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Help</h4>
          <ul className="space-y-1">
            <li><a href="#">Contact</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t mt-10 pt-6 text-xs text-center md:text-left md:flex md:justify-between max-w-6xl mx-auto text-gray-500">
        <p>© 2022 Design by NUBL.com</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
