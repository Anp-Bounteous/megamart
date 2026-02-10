import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById, type Product } from "../api/products";
import { useCart } from "../context/cartcontext";

const product = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) getProductById(id).then(setProduct);
  }, [id]);

  if (!product) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.title}
        className="h-80 w-full object-contain"
      />

      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-yellow-500 font-bold text-xl mt-2">${product.price}</p>
        <p className="text-gray-700 mt-4">{product.description}</p>

        <button
          className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default product;

