import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-8 mt-10">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get to Know Us</h3>
            <ul>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press Releases</a></li>
              <li><a href="#" className="hover:underline">Amazon Cares</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect with Us</h3>
            <ul>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Make Money with Us</h3>
            <ul>
              <li><a href="#" className="hover:underline">Sell on Amazon</a></li>
              <li><a href="#" className="hover:underline">Amazon Global Selling</a></li>
              <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
              <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Service</h3>
            <ul>
              <li><a href="#" className="hover:underline">Help & FAQs</a></li>
              <li><a href="#" className="hover:underline">Returns & Replacements</a></li>
              <li><a href="#" className="hover:underline">Track Your Order</a></li>
              <li><a href="#" className="hover:underline">Delivery Rates & Policies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Amazon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
