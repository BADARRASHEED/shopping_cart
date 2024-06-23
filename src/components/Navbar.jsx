import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const items = useSelector((state) => state.cart);
  return (
    <div className="navbar fixed z-10 shadow-lg bg-[#764abc] text-white">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost text-3xl">
          Badar Store
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"} className="text-lg">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="text-lg">
              Cart
            </Link>
          </li>
          <li>
            <span className="font-bold text-lg uppercase">
              Cart items: {items.length}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
