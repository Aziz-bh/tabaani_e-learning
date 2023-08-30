import { Routes, Route, Navigate } from "react-router-dom";
import routes from "routes.js";
import LandingNavBar from "components/LandingNavbar";

export default function General() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/general") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <div className=" bg-white dark:bg-navy-900">
      <main>
        <LandingNavBar />
        <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 py-2">
          <Routes>
            {getRoutes(routes)}

            <Route path="/" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
