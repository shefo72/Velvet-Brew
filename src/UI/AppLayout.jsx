import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
