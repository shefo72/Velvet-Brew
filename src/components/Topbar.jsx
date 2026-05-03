import { Bell, Settings, Menu, Home, LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/userSlice";
function Topbar({ onMenuClick }) {
  const dispatch = useDispatch();

  const { userData: user, role } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="h-16 border-b-2 bg-[#FFF8F2] border-[#e7e5e4] flex items-center justify-between px-6 gap-4 sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden cursor-pointer p-2 rounded-lg text-[#57534E] hover:bg-[#F5EFE6] transition-colors"
        >
          <Menu size={20} />
        </button>
        <span className="text-sm md:text-lg font-bold text-primary-coffee">
          Admin
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="p-2 rounded-lg text-muted-coffee hover:bg-secondary-coffee transition-colors"
        >
          <Home size={20} />
        </Link>
        <div className="md:flex items-center border-l border-primary-coffee/20 pl-6 ml-2">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-primary-coffee hidden lg:block">
              Hi, {user.first_name || "Brewer"}
            </span>
            <button
              onClick={handleLogout}
              className="text-primary-coffee hover:text-red-700 transition-colors"
              title="Logout"
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
