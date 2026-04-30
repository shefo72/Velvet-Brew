import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";
import FullPageSpinner from "./FullPageSpinner";

function AppLayout({ search, setSearch }) {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <Header search={search} setSearch={setSearch} />
        <Suspense fallback={<FullPageSpinner />}>
          <Outlet context={{ search }} />
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
