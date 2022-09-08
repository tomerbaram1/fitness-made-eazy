import "./css/accountInformation.css";
import * as React from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AddCardIcon from "@mui/icons-material/AddCard";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import Login from "../../../components/basic/Login";
import Register from "../../../components/basic/Register";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import PaymentMethod from "../../../components/basic/PaymentMethod";

import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../../../../../reducers/OpenLoginSlice";
import {
  openRegisterFunction,
  closeRegisterFunction,
} from "../../../../../reducers/OpenRegisterSlice";
import {
  openMyCartFunction,
  closeMyCartFunction,
} from "../../../../../reducers/OpenMyCartSlice";
import MyCart from "./MyCart";
import { openPay, closePay } from "../../../../../reducers/OpenPaymentSlice";

const AccountInformation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openLogin, setOpenLogin] = React.useState(true);
  const [openRegister, setOpenRegister] = React.useState(true);
  const [openPayment, setOpenPayment] = React.useState(true);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const dispatch = useDispatch();
  const openMyCart = useSelector((state) => state.openMyCart.value);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  React.useEffect(() => {
    handleClose();
  }, [state]);

  return (
    <div className="accountInformationContainer">
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        sx={{ bgcolor: "background.secondary" }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="accontMenuContainer"
      >
        <div style={{ textAlign: "center" }}>
          <AccountCircle fontSize="large"></AccountCircle>
          <h4 className="accountMenuTitle">Welcome</h4>
        </div>
        <hr></hr>

        <MenuItem
          onClick={() => (dispatch(open()), handleClose)}
          sx={{ fontWeight: 600 }}
        >
          <LoginIcon></LoginIcon> Log In
        </MenuItem>
        <hr></hr>
        <MenuItem
          onClick={() => (dispatch(openRegisterFunction()), handleClose)}
          sx={{ fontWeight: 600 }}
        >
          <HowToRegIcon></HowToRegIcon> Register
        </MenuItem>
        <hr></hr>
        <MenuItem
          onClick={toggleDrawer("right", true)}
          sx={{ fontWeight: 600 }}
        >
          <ShoppingCartIcon></ShoppingCartIcon>My Cart
        </MenuItem>
        <hr></hr>
        <MenuItem
          onClick={() => (dispatch(openPay()), handleClose)}
          sx={{ fontWeight: 600 }}
        >
          <AddCardIcon></AddCardIcon>Payment Method
        </MenuItem>
      </Menu>
      <Login openLogin={openLogin} setOpenLogin={setOpenLogin}></Login>
      <Register
        openRegister={openRegister}
        setOpenRegister={setOpenRegister}
      ></Register>
      <PaymentMethod
        openPayment={openPayment}
        setOpenPayment={setOpenPayment}
      ></PaymentMethod>
      <div>
        <React.Fragment>
          <Drawer
            anchor="right"
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            <MyCart toggleDrawer={toggleDrawer}></MyCart>
          </Drawer>
        </React.Fragment>
      </div>
    </div>
  );
};
export default AccountInformation;
