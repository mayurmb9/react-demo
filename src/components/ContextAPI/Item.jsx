import { useCart } from './ContextData';

export default function Item({ name, price }) {
  const { items, setItems } = useCart();

  const addToCart = () => {
    const existingItemIndex = items.findIndex(item => item.name === name);

    if (existingItemIndex >= 0) {
      const updatedItems = [...items];
      updatedItems[existingItemIndex].quantity += 1;
      setItems(updatedItems);
    } else {
      setItems([...items, { name, price, quantity: 1 }]);
    }
  };

  return (
    <div className='item-card'>
      <h4>{name}</h4>
      <p>Price : ₹{price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
