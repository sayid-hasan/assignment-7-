import { RiAccountCircleLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="navbar w-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn pl-0 text-2xl btn-ghost lg:hidden"
            >
              <FaBars></FaBars>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="text-base font-normal text-[#150b2b] text-opacity-70">
                <a>Home</a>
              </li>
              <li className="text-base font-normal text-[#150b2b] text-opacity-70">
                <a>Recipes</a>
              </li>
              <li className="text-base font-normal text-[#150b2b] text-opacity-70">
                <a>About</a>
              </li>
              <li className="text-base font-normal text-[#150b2b] text-opacity-70">
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold text-[#150b2b] px-0 ">
            Recipe Calories
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li className="text-base font-normal text-[#150b2b] text-opacity-70">
              <a>Home</a>
            </li>
            <li className="text-base font-normal text-[#150b2b] text-opacity-70">
              <a>Recipes</a>
            </li>
            <li className="text-base font-normal text-[#150b2b] text-opacity-70">
              <a>About</a>
            </li>
            <li className="text-base font-normal text-[#150b2b] text-opacity-70">
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label className="input  h-[55px]  rounded-full md:mr-6 mr-2 bg-[#150b2b] bg-opacity-5 flex items-center gap-2 ">
            <input
              type="text"
              className="grow border-none outline-none px-6 hidden md:block"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-6 h-6 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <div className="text-2xl w-12 aspect-square rounded-full bg-[#0be58a] flex justify-center items-center ">
            <RiAccountCircleLine></RiAccountCircleLine>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
