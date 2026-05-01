import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";

import Topbar from "../components/Topbar";
import Sidebar from "../components/SideBar";
import FullPageSpinner from "./FullPageSpinner";

function DashboardLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#FFF8F2] overflow-hidden font-sans">
      <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="flex-1 flex flex-col">
        <Topbar onMenuClick={() => setMobileOpen(true)} />
        <Suspense fallback={<FullPageSpinner />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default DashboardLayout;
