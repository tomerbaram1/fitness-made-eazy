import Button from "@mui/material/Button";
import * as React from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  addToMyCart,
  removeFromMyCart,
} from "../../../../../reducers/MyCartSlice";
import CartItem from "../../basic/CartItem.jsx";
import PaymentMethod from "../../basic/PaymentMethod";
import "./css/myCart.css";
export default function MyCart(props) {
  const [openPaymentMethod, setOpenPaymentMethod] = React.useState(false);
  const cartItems = useSelector((state) => state.myCart.MyCartItems);
  const dispatch = useDispatch();
  const removeItemCount = (index) => {
    dispatch(removeFromMyCart(index));
  };
  const addItemCount = (index) => {
    dispatch(
      addToMyCart({
        image: cartItems[index].Image,
        title: cartItems[index].title,
        price: cartItems[index].price,
      })
    );
  };

  const itemsComponent = cartItems.map((item) => (
    <CartItem
      image={item.image}
      title={item.title}
      price={item.price}
      count={item.count}
      handleRemove={() => removeItemCount(cartItems.indexOf(item))}
      handleAdd={() => addItemCount(cartItems.indexOf(item))}
    ></CartItem>
  ));
  const getPriceSum = () => {
    let priceSum = 0;
    cartItems.forEach((element) => {
      priceSum = priceSum + element.price;
    });
    return priceSum;
  };
  const priceSum = getPriceSum();
  return (
    <div className="cartContainer">
      <div className="cartTitleContainer">
        <ShoppingCartIcon className="cartTitleIcon"></ShoppingCartIcon>
      </div>
      <hr className="cartTitleBorder"></hr>
      <div className="cartItemsContainer">{itemsComponent}</div>
      <h1 className="cartSum">sum: {priceSum}$</h1>
      <div className="buttonsContainer">
        <Button
          className="myCartButton"
          size="Large"
          variant="contained"
          onClick={() => {
            setOpenPaymentMethod(true);
          }}
        >
          Procced To Checkout
        </Button>
        <Button
          className="myCartButtonTwo"
          size="Large"
          variant="contained"
          sx={{ bgcolor: grey[500] }}
          onClick={props.toggleDrawer("right", false)}
        >
          Continue Shopping
        </Button>
        <PaymentMethod
          openPaymentMethod={openPaymentMethod}
          setOpenPaymentMethod={setOpenPaymentMethod}
        ></PaymentMethod>
      </div>
    </div>
  );
}
