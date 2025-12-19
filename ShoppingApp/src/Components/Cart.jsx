import './Style.css'

const Cart = ({ mycart, removeProduct }) => {
  return (
    <div className="cart_section">
      <h1>Your list</h1>

      {mycart.length === 0 && <p>Cart is empty</p>}

      {mycart.map((item, index) => (
        <div key={index} className="cart_item">
          <span>{item.title}</span>
          <span>{item.price}</span>
          <span>Qty: {item.count}</span>

          <button
            className="border-2 block"
            onClick={() => removeProduct(index)}
          >
            remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;