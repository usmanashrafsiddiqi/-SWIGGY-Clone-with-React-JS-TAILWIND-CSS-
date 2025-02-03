import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between">
          {/* Column 1 */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
              <li><a href="#" className="hover:text-gray-400">Press</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="https://www.facebook.com/swiggy.in/" className="hover:text-gray-400">Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/swiggy-in/" className="hover:text-gray-400">Instagram</a></li>
              <li><a href="https://twitter.com/Swiggy?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="hover:text-gray-400">Twitter</a></li>
              <li><a href="https://www.linkedin.com/company/swiggy-in/" className="hover:text-gray-400">LinkedIn</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="w-full md:w-1/4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Download App</h3>
            <div className="space-y-4">
              <a href="https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage" className="block w-40 h-12 bg-black text-white text-center rounded-lg hover:bg-gray-800 transition duration-300">Download on the App Store</a>
              <a href="https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader" className="block w-40 h-12 bg-black text-white text-center rounded-lg hover:bg-gray-800 transition duration-300">Get it on Google Play</a>
            </div>
          </div>
        </div>

        {/* Bottom section (Copyrights) */}
        <div className="text-center mt-12 border-t border-gray-600 pt-6">
          <p className="text-sm">© 2025 Swiggy Clone. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
