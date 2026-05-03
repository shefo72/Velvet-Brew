import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, LogOut, User } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import { capitalizeFirstLetter } from "./../utils/helpers";

function Header({ search, setSearch }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userData: user, role } = useSelector((state) => state.user);
  const itemsNumber = useSelector((state) => state.cart.items).length;
  const locationPath = useLocation().pathname;

  const navLinks = [
    { name: "Home", path: "/", show: true },
    { name: "Menu", path: "/menu", show: true },
    { name: "Dashboard", path: "/dashboard", show: role === "admin" },
    { name: "Cart", path: "/cart", show: !!user },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#F9EFE7F5] py-4 px-6 md:px-12 lg:px-24  border-b border-gray-200/25">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <NavLink
          to="/"
          className="text-2xl font-bold text-primary-coffee tracking-wide shrink-0 font-serif"
        >
          Velvet Brew
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks
            .filter((link) => link.show)
            .map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold transition-all pb-1 border-b-[3px] ${
                    isActive
                      ? "text-[#A67B5B] border-[#A67B5B]"
                      : "text-[#2B2B2B] hover:text-primary-coffee border-transparent"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
        </div>

        <div className="flex items-center gap-5 md:gap-6">
          {locationPath === "/menu" && (
            <div className="hidden sm:flex relative items-center">
              <Search
                className="absolute left-3 text-[#141B34] opacity-50"
                size={16}
              />
              <input
                type="text"
                placeholder="Search menu..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-[#FFFFFF54] text-primary-coffee placeholder:text-muted-coffee border border-primary-coffee/25 rounded-full py-2 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary-coffee/30 w-48 lg:w-64 transition-all"
              />
            </div>
          )}

          <NavLink
            to="/cart"
            className="relative text-primary-coffee shrink-0"
            aria-label="Cart"
          >
            <ShoppingCart size={22} />
            {itemsNumber > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#A67B5B] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center animate-bounce">
                {itemsNumber}
              </span>
            )}
          </NavLink>

          <div className="hidden md:flex items-center border-l border-primary-coffee/20 pl-6 ml-2">
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-primary-coffee hidden lg:block">
                  Hi, {capitalizeFirstLetter(user.first_name) || "Brewer"}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-primary-coffee hover:text-red-700 transition-colors cursor-pointer"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <NavLink
                to="/login"
                className="text-sm font-bold text-primary-coffee hover:text-[#A67B5B] transition-colors"
              >
                Login
              </NavLink>
            )}
          </div>

          <button
            className="md:hidden cursor-pointer text-primary-coffee"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={26} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#f9efe7] z-100 transform transition-transform duration-300 ease-out md:hidden shadow-2xl flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-primary-coffee italic font-serif">
              Velvet Brew
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-primary-coffee cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>

          {user && (
            <div className="flex items-center gap-3 mb-8 p-4 bg-white/50 rounded-2xl">
              <div className="w-10 h-10 bg-primary-coffee rounded-full flex items-center justify-center text-white">
                <User size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-primary-coffee">
                  {`${capitalizeFirstLetter(user.first_name)} ${capitalizeFirstLetter(user.last_name)}`}
                </p>
                <p className="text-[10px] text-muted-coffee uppercase tracking-widest">
                  {role}
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-6 flex-1">
            {navLinks
              .filter((link) => link.show)
              .map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium flex items-center justify-between ${isActive ? "text-primary-coffee font-bold" : "text-muted-coffee"}`
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

          <div className="mt-auto pt-6 border-t border-primary-coffee/10">
            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 text-red-700 font-bold text-lg w-full"
              >
                <LogOut size={22} /> Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-primary-coffee font-bold text-lg block text-center py-3 border-2 border-primary-coffee rounded-full"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
