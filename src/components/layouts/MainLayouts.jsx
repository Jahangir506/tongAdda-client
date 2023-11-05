import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayouts = ({ children }) => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className=" fixed top-0 z-50 w-full navbar bg-yellow-300 dark:bg-zinc-700/95">
           <Navbar></Navbar>
          </div>
          {/* Page content here */}
          {children}
        </div>
        <div className="drawer-side top-16">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu text-center  p-4 w-80 min-h-full dark:bg-zinc-800 bg-gray-200">
            {/* Sidebar content here */}
            <div className="flex flex-col gap-2">
                  {/* Navbar menu content here */}
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "btn btn-primary btn-sm"
                        : "btn btn-ghost btn-sm"
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "btn btn-primary btn-sm"
                        : "btn btn-ghost btn-sm"
                    }
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "btn btn-primary btn-sm"
                        : "btn btn-ghost btn-sm"
                    }
                  >
                    Login
                  </NavLink>
                </div>
          </div>
        </div>
      </div>
    </>
  );
};

MainLayouts.propTypes = {
  children: PropTypes.node,
};

export default MainLayouts;
