export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 border-t border-gray-700/50 mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              About
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted source for premium affiliate products and exclusive deals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-purple-400 transition-colors font-medium">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-purple-400 transition-colors font-medium">About Us</a></li>
              <li><a href="/profile" className="text-gray-400 hover:text-purple-400 transition-colors font-medium">Profile</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Support
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors font-medium">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors font-medium">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors font-medium">FAQ</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-purple-600/20 hover:bg-purple-600 rounded-full flex items-center justify-center text-purple-400 hover:text-white transition-all group">
                <span className="text-lg font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600/20 hover:bg-purple-600 rounded-full flex items-center justify-center text-purple-400 hover:text-white transition-all group">
                <span className="text-lg font-bold">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600/20 hover:bg-purple-600 rounded-full flex items-center justify-center text-purple-400 hover:text-white transition-all group">
                <span className="text-lg font-bold">in</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>&copy; 2026 TARUNSPOT. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
