import { useGlobalContext } from "./Context";

const CartItem = ({ id, img, title, price, amount }) => {
  const { remove , increase,decrease} = useGlobalContext();
  return (
    <>
      <article key={id} className="cart-items">
        <img src={img} alt={img} className="images" />
        <div className="info">
          <h4>{title}</h4>
          <h4>{price}</h4>
          <button className="btn remove-btn" onClick={() =>{remove(id)}}>Remove</button>
        </div>
        <div className="value">
          <button className="btn dec" onClick={() =>{decrease(id)}}>-</button>
          <h4>{amount}</h4>
          <button className="btn next" onClick={() =>{increase(id)}}>+</button>
        </div>
      </article>
    </>
  );
};
export default CartItem;
