import { Link } from "react-router-dom";
import { useCart } from "../context/cartcontext";

const Header = () => {
  const { cart } = useCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className="bg-[#232f3e] text-white">
      <div className="max-w-6xl mx-auto flex items-center p-4 gap-4">
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          Amazon
        </Link>

        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 rounded px-3 py-2 text-black"
        />

        <Link to="/cart" className="flex items-center gap-2">
          <span className="bg-yellow-400 text-black px-2 py-1 rounded">
            Cart
          </span>
          <span className="bg-yellow-500 px-2 py-1 rounded">{totalQty}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;

