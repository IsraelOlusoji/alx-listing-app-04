import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      {/* Main Footer Content */}
      <div className="px-6 py-12">
        {/* Logo and Description */}
        <div className="mb-8">
          <div className="text-2xl font-bold mb-4">
            al<span className="text-gray-400">×</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-md">
            ALX is a platform where travelers can discover and book unique,
            comfortable, and affordable lodging options worldwide. From cozy
            city apartments and tranquil countryside retreats to exotic
            beachside villas, ALX connects you with the perfect place to stay
            for any trip.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Explore Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Apartments in Dubai
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Hotels in New York
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Villa in Spain
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Mansion in Indonesia
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Brand
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Cancel booking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 text-sm hover:text-white transition-colors"
                >
                  Refunds Process
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Hotel Cancellation Notice */}
        <div className="mb-8">
          <p className="text-gray-400 text-xs">
            Some hotel requires you to cancel more than 24 hours before
            check-in. Details{" "}
            <a
              href="#"
              className="text-teal-400 hover:text-teal-300 transition-colors"
            >
              here
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex flex-wrap justify-center sm:justify-start space-x-4">
            <a
              href="#"
              className="text-gray-400 text-xs hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 text-xs hover:text-white transition-colors"
            >
              Policy service
            </a>
            <a
              href="#"
              className="text-gray-400 text-xs hover:text-white transition-colors"
            >
              Cookies Policy
            </a>
            <a
              href="#"
              className="text-gray-400 text-xs hover:text-white transition-colors"
            >
              Partners
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
