import { Link } from "react-router-dom";

const home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mt-6">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded p-8">
          <h1 className="text-3xl font-bold">Amazon Style Store</h1>
          <p className="mt-2">Best deals, best prices, fast delivery.</p>
          <Link to="/products" className="mt-4 inline-block bg-black text-white px-6 py-2 rounded">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default home;

