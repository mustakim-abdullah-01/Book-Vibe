import { Link, NavLink } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `btn rounded-lg ${isActive ? "btn-success" : "btn-ghost"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/books"}
          className={({ isActive }) =>
            `btn rounded-lg ${isActive ? "btn-success" : "btn-ghost"}`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/page-to-read"}
          className={({ isActive }) =>
            `btn rounded-lg ${isActive ? "btn-success" : "btn-ghost"}`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="shadow-sm navbar flex justify-between md:space-x-43.25 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="p-2 mt-3 shadow menu menu-xs dropdown-content bg-base-100 rounded-box z-1 w-52"
            >
              {links}
            </ul>
          </div>

          <Link
            className="font-bold max-md:hidden md:text-3xl md:font-extrabold md:w-45"
            to={"/"}
          >
            Book Vibe
          </Link>
        </div>

        {/* <div></div> */}

        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 space-x-4 menu menu-horizontal">{links}</ul>
        </div>
        <div className="ml-16 space-x-4 navbar-end">
          <a className="rounded-lg btn btn-success">Sign In</a>
          <a className="rounded-lg btn btn-info">Sign Up</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
