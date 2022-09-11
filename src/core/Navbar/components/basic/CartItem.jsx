import { Button } from "@mui/material";
import "./css/cartItem.css";

const CartItem = (props) => {
  return (
    <>
      <div className="cartItemContainer">
        <img className="cartItem cartItemImage" src={props.image}></img>
        <h3 className="cartItem cartItemTitle">{props.title}</h3>
        <h3 className="cartItem cartItemPrice">{props.price}$</h3>
      </div>
      <div className="cartItemCounterContainer">
        <Button className="cartItemCounterButton" onClick={props.handleRemove}>
          -
        </Button>
        <h4 className="cartItem cartItemCount">{props.count}</h4>
        <Button className="cartItemCounterButton" onClick={props.handleAdd}>
          +
        </Button>
      </div>
      <hr className="cartItemBorder"></hr>
    </>
  );
};
export default CartItem;
