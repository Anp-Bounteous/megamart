import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProducts, type Product } from "../api/products";

const products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <div className="border p-4 rounded hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain"
              />
              <h3 className="mt-3 font-semibold">{product.title}</h3>
              <p className="text-yellow-500 font-bold mt-1">${product.price}</p>
              <p className="text-gray-500 text-sm mt-2">
                {product.description.slice(0, 80)}...
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default products;

