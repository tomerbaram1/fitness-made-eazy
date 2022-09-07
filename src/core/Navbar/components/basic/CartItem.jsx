import "./css/cartItem.css";

const CartItem = (props) => {
  return (
    <>
      <div className="cartItemContainer">
        <img className="cartItem cartItemImage" src={props.image}></img>
        <h3 className="cartItem cartItemTitle">{props.title}</h3>
        <h3 className="cartItem cartItemPrice">{props.price}</h3>
      </div>
      <hr className="cartItemBorder"></hr>
    </>
  );
};
export default CartItem;
