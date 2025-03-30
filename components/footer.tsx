// src/components/layout/Footer.jsx

import React from 'react';

const Footer = ({ socialLinks }: { socialLinks: { instagram: string; twitter: string; facebook: string; youtube: string; } }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">ANDY GRUNNEBAUM</div>
            <p className="text-gray-400">Official Website</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-6 md:mb-4">
            </div>
            
            <div className="text-center md:text-right">
              <nav>
                <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                  <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-blue-400">Terms of Use</a></li>
                  <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                </ul>
              </nav>
              <p className="text-gray-400 mt-4">© {currentYear} Andy Grunnebaum. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;