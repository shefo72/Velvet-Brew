import { Bell, Settings, Menu, Home } from "lucide-react";
import { Link } from "react-router-dom";

function Topbar({ onMenuClick }) {
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
        <button className="p-2 rounded-lg text-muted-coffee hover:bg-secondary-coffee transition-colors">
          <Bell size={20} />
        </button>
        <button className="p-2 rounded-lg text-muted-coffee hover:bg-secondary-coffee transition-colors">
          <Settings size={20} />
        </button>
        <div className="w-8 h-8 rounded-full bg-primary-coffee flex items-center justify-center ml-1 cursor-pointer">
          <span className="text-secondary-coffee text-xs font-bold">AS</span>
        </div>
      </div>
    </header>
  );
}

export default Topbar;
