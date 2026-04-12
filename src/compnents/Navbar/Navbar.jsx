import { BiCart, BiMenuAltLeft, BiSearch, BiUser } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4">
      {/* Navbar left */}
      <div className="flex items-center gap-2">
        <span className="bg-gray-200 hover:bg-gray-300/65 text-blue-500 p-1 rounded-md cursor-pointer">
          <BiMenuAltLeft className="w-6 h-6 stroke-[0.3]"></BiMenuAltLeft>
        </span>
        <h1 className="text-2xl text-blue-500 font-semibold select-none">
          <a href="#">TeckNest</a>
        </h1>
      </div>

      {/* Navbar center */}
      <legend className="flex items-center gap-2 bg-gray-200 rounded-md overflow-hidden">
        <label htmlFor="search-item" className="relative flex items-center">
          <span className="absolute ml-2">
            <BiSearch className="w-5 h-5 stroke-[0.3] fill-gray-400 stroke-gray-400"></BiSearch>
          </span>
          <input
            type="search"
            name="search-item"
            id="search-item"
            placeholder="Search assensials, accesories and more..."
            className="w-100 h-full pl-8 focus:outline-none"
          />
        </label>

        <span className="p-2 bg-gray-300/30 hover:bg-gray-300/65 cursor-pointer">
          <TfiMenuAlt className="w-5 h-5 fill-gray-600 stroke-gray-600"></TfiMenuAlt>
        </span>
      </legend>

      {/* Navbar right */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="">
            <BiUser className="w-6 h-6 stroke-[0.3]"></BiUser>
          </span>
          <span>
            <a href="#" className="hover:underline">
              Sign In
            </a>
            /
            <a href="#" className="hover:underline">
              Sign Up
            </a>
          </span>
        </div>

        <span className="h-6 w-0.5 rounded-full bg-gray-300/65"></span>

        <div className="flex items-center gap-2">
          <BiCart className="w-6 h-6 stroke-[0.3]"></BiCart>
          <span>Cart</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
