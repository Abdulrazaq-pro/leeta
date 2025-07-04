import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B1F30] text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <span className="text-sm font-bold text-[#FD671E] mr-2">LEETA</span>
            <span className="text-xs text-[#FD671E]/80">
              © {new Date().getFullYear()} Gas Delivery Services
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="text-xs text-[#FD671E]/80 hover:text-white transition-colors"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-xs text-[#FD671E]/80 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <a 
              href="#" 
              className="text-xs text-[#FD671E]/80 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;