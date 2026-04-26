import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Contact", path: "contact" },
];

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#f9efe7] py-4 px-6 md:px-12 lg:px-24  border-b border-gray-200/25">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <NavLink
          to="/"
          className="text-2xl font-bold text-primary-coffee italic tracking-wide shrink-0 font-['Liberation_Serif',serif]"
        >
          Velvet Brew
        </NavLink>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-all pb-1 border-b-[3px] ${
                  isActive
                    ? "text-primary-coffee border-primary-coffee"
                    : "text-muted-coffee hover:text-primary-coffee border-transparent"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-5 md:gap-6 ">
          <div className="hidden sm:flex relative items-center">
            <Search
              className="absolute left-3 text-muted-coffee"
              size={16}
              strokeWidth={2}
            />
            <input
              type="text"
              placeholder="Search menu..."
              className="bg-[#F8ECDA] text-primary-coffee placeholder:text-muted-coffee border border-primary-coffee/25  rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-coffee/30 w-48 lg:w-64 transition-all"
            />
          </div>

          <NavLink
            to="/cart"
            className="relative text-primary-coffee shrink-0"
            aria-label="Cart"
          >
            <ShoppingCart size={22} />
            <span className="absolute -top-1.5 -right-1.5 bg-primary-coffee text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </NavLink>

          <button
            className="md:hidden text-primary-coffee hover:text-coffee-hover transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={26} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-50 md:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#f9efe7] z-50 transform transition-transform duration-300 ease-out md:hidden shadow-2xl flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-primary-coffee italic font-['Liberation_Serif',serif]">
              Velvet Brew
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-primary-coffee  p-1"
            >
              <X size={24} strokeWidth={2.5} />
            </button>
          </div>

          <div className="relative items-center mb-8 sm:hidden">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-coffee"
              size={18}
            />
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#F8ECDA] w-full rounded-full py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-coffee/30"
            />
          </div>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors flex items-center justify-between ${
                    isActive
                      ? "text-primary-coffee font-bold"
                      : "text-muted-coffee hover:text-primary-coffee"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-primary-coffee"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
