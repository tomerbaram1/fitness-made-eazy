import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./css/myCart.css";
import CartItem from "../../basic/CartItem.jsx";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { closeMyCartFunction } from "../../../../../reducers/OpenMyCartSlice";
export default function MyCart(props) {
  const cartItems = [
    {
      image: "",
      title: "hihi",
      price: "21$",
    },
    { image: "", title: "aksodkasodkas", price: "22" },
    { image: "", title: "ajaa", price: "12" },
  ];

  const itemsComponent = cartItems.map((item) => (
    <CartItem
      image={item.image}
      title={item.title}
      price={item.price}
    ></CartItem>
  ));

  return (
    <div className="cartContainer">
      <div className="cartTitleContainer">
        <ShoppingCartIcon className="cartTitleIcon"></ShoppingCartIcon>
      </div>
      <hr className="cartTitleBorder"></hr>
      <div className="cartItemsContainer">{itemsComponent}</div>
      <div className="buttonsContainer">
        <Button size="Large" variant="contained">
          Procced To Checkout
        </Button>
        <Button
          size="Large"
          variant="contained"
          sx={{ bgcolor: grey[500] }}
          onClick={props.toggleDrawer("right", false)}
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}
