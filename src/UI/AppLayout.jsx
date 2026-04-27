import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function AppLayout({ search, setSearch }) {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">

        <Header search={search} setSearch={setSearch}/>
        <div className="container">
          <Outlet />
        </div> 
        <Footer />
      </div>
      
    </>
  );
}

export default AppLayout;
