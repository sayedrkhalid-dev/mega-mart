import Link from "next/link";
import {
  BiCart as ChartIcon,
  BiMenuAltLeft as MenuIcon,
  BiSearch as SearchIcon,
  BiUser as UserIcon,
  BiListUl as ListIcon,
} from "react-icons/bi";

const Navbar = () => {
  return (
    <nav>
      {/* Navbr content */}
      <div className="navbar bg-base-100 shadow-sm">
        {/* Navbar Start */}
        <div className="navbar-start gap-2">
          {/* Dropdown menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="text-gray-300 bg-gray-100/5 hover:bg-gray-100/10 p-2 rounded-md"
            >
              <MenuIcon size={24} />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>

          <Link href="/" className="text-xl font-bold">
            MegaMart
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center w-[35%]">
          <div className="input w-full gap-0 p-0 pl-2">
            <label className="w-full flex gap-2 items-center border-r border-gray-500">
              <SearchIcon size={24} />
              <input
                className="w-full"
                type="search"
                required
                placeholder="Search assentials, groceries and more..."
              />
            </label>

            <div className="text-gray-300 cursor-pointer hover:bg-gray-100/5 p-2">
              <ListIcon size={24} />
            </div>
          </div>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />{" "}
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />{" "}
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
