import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useDarkMode";

const Navbar = () => {
  const { changeTheme, mode } = useTheme();
  const { user, logout } = useAuth();

  return (
    <>
      <div className="w-[1600px] flex justify-between max-w-[1600px] mx-auto">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className=" px-2 mx-2 text-xl font-bold">Tong Adda</div>
        <div className="flex-none hidden lg:block">
          <div className="flex justify-center items-center gap-1">
            {/* Navbar menu content here */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-sm font-medium capitalize border-b-4 border-darkBrown border-l-0 border-t-0 border-r-0 dropdown dropdown-hover"
                  : "btn btn-ghost btn-sm text-sm capitalize"
              }
            >
              Home
            </NavLink>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="m-1">
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm capitalize font-medium border-b-4 border-darkBrown border-l-0 border-t-0 border-r-0 "
                      : "btn btn-ghost btn-sm text-sm capitalize"
                  }
                >
                  Service
                </NavLink>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 mt-5  shadow bg-base-100 rounded-b-xl w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="m-1">
                <NavLink
                  to="/Menu"
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm capitalize font-medium border-b-4 border-darkBrown border-l-0 border-t-0 border-r-0 "
                      : "btn btn-ghost btn-sm text-sm capitalize"
                  }
                >
                  Menu
                </NavLink>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 mt-5  shadow bg-base-100 rounded-b-xl w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
            <NavLink
                  to="/addService"
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm capitalize font-medium border-b-4 border-darkBrown border-l-0 border-t-0 border-r-0 "
                      : "btn btn-ghost btn-sm text-sm capitalize"
                  }
                >
                  Added Service
                </NavLink>
            <NavLink
                  to="/manageService"
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm capitalize font-medium border-b-4 border-darkBrown border-l-0 border-t-0 border-r-0 "
                      : "btn btn-ghost btn-sm text-sm capitalize"
                  }
                >
                  Manage Service
                </NavLink>
            <NavLink
                  to="/schedule"
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm capitalize font-medium border-b-4 border-darkBrown border-l-0 border-t-0 border-r-0 "
                      : "btn btn-ghost btn-sm text-sm capitalize"
                  }
                >
                  Schedule
                </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-sm capitalize font-medium border-b-4 border-darkBrown border-l-0 border-t-0 border-r-0 "
                  : "btn btn-ghost btn-sm text-sm capitalize"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-sm capitalize font-medium border-b-4 border-darkBrown border-l-0 border-t-0 border-r-0 "
                  : "btn btn-ghost btn-sm text-sm capitalize"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={changeTheme}
            className="btn-sm border flex justify-center items-center hover:bg-black/20 border-zinc-500 btn-circle hover:dark:bg-black/10 dark:text-black  rounded-full mr-1"
          >
            <div>
              {mode === "dark" ? (
                <MdOutlineWbSunny className="text-white" />
              ) : (
                <MdDarkMode className="" />
              )}
            </div>
          </button>

          {user ? (
            <div className="dropdown dropdown-end ml-2">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user && <img src={user?.photoURL} />}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-4 shadow dark:bg-zinc-700  bg-base-100 rounded-box w-40 mt-4"
              >
                <div className="text-center dark:text-white">
                  {user && <p className="mb-3">{user?.displayName}</p>}
                  <Link to="/login">
                    <button
                      onClick={logout}
                      className="py-2 text-white bg-darkBrown hover:bg-darkBrownHover px-8 text-md rounded-md"
                    >
                      Logout
                    </button>
                  </Link>
                </div>
              </ul>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "py-2 text-white bg-darkBrown hover:bg-darkBrownHover px-8 text-md rounded-md"
                  : "py-2 text-white bg-darkBrown hover:bg-darkBrownHover px-8 text-md rounded-md"
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};
export default Navbar;
