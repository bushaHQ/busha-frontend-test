import {  Outlet } from "react-router-dom";
import { DashboardProvider } from "./DashboardProvider";
import Header from "./Header";
import SideBar from "./SideBar";
const DashboardLayout = () => {
  return (
    <DashboardProvider>
      <>
        <main className="">
          <Header />
          <section className="container dashboard">
            <aside className="hidden md:block">
                <SideBar />
            </aside>
            <section className="main">
              <Outlet />
            </section>
          </section>
        </main>
      </>
    </DashboardProvider>
  );
};

export default DashboardLayout;
