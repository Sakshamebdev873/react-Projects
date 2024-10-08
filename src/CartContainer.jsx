import CartItem from "./CartItem";
import { useGlobalContext } from "./Context";
// import CartItems from "./data"

const CartContainer = () => {
  const { cart,clearbtn,total} = useGlobalContext();
  console.log(cart);
  if (cart.length === 0) {
    return <h4 className="empty-message">Currently you have empty list</h4>;
  }
  return (
    <>
      <section className="cart">
        <header>your bag</header>
        <div className="items">
          {cart.map((item, index) => {
            return <CartItem key={index} {...item} />;
          })}
        </div>
        <article className="footer">
          <div className="underline"></div>
          <div className="bill">
            <p>total Bill</p>
            <h4>${total}</h4>
          </div>
        </article>
      </section>
      <div className="clear-button"><button className="clear-btn" onClick={clearbtn}>Clear cart</button></div>
      
    </>
  );
};
export default CartContainer;
