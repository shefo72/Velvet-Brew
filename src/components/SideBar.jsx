import { LayoutDashboard, Package, Warehouse } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/dashboard/overview" },
  { icon: Package, label: "Products", path: "/dashboard/products" },
  { icon: Warehouse, label: "Inventory", path: "/dashboard/inventory" },
];

export default function Sidebar({ mobileOpen, onClose }) {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-30 w-56 bg-[#F5EFE6] flex flex-col justify-between py-6 px-3 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div>
          <div className="px-4 mb-8">
            <p className="font-serif text-xl font-bold text-[#3C2A21] tracking-tight leading-tight">
              VELVET BREW
            </p>
            <p className="text-[10px] tracking-[0.18em] text-[#57534E] uppercase mt-0.5">
              Roastery Management
            </p>
          </div>
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

function SidebarItem({ icon: Icon, label, path }) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-[#3C2A21] text-[#F5EFE6]"
            : "text-[#57534E] hover:bg-[#E8DFD2] hover:text-[#3C2A21]"
        }`
      }
    >
      <Icon size={18} strokeWidth={1.8} />
      <span>{label}</span>
    </NavLink>
  );
}
