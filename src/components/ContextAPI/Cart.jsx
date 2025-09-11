import { useCart } from './ContextData';

export default function Cart() {
  const { items } = useCart();

  const totalBill = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>

      {items.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <span>{item.name} - ₹{item.price} × {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h5>Total Bill : ₹{totalBill}</h5>
            <h5>Total Items : {totalItems}</h5>
          </div>
        </>
      )}
    </div>
  );
}
