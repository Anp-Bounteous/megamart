import { useCart } from "../context/cartcontext";

const cart = () => {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 items-center border p-4 mb-3">
              <img src={item.image} className="h-20 w-20 object-contain" />
              <div className="flex-1">
                <p className="font-bold">{item.title}</p>
                <p>${item.price} x {item.qty}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-1 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 text-xl font-bold">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
};

export default cart;

