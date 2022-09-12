import "./css/accountInformation.css";
import * as React from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LoginIcon from "@mui/icons-material/Login";
import Login from "../../../components/basic/Login";
import Register from "../../../components/basic/Register";
import Drawer from "@mui/material/Drawer";

import { useSelector, useDispatch } from "react-redux";
import { open } from "../../../../../reducers/OpenLoginSlice";
import { openRegisterFunction } from "../../../../../reducers/OpenRegisterSlice";

import MyCart from "./MyCart";

const AccountInformation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openLogin, setOpenLogin] = React.useState(true);
  const [openRegister, setOpenRegister] = React.useState(true);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const dispatch = useDispatch();
  const openMyCart = useSelector((state) => state.openMyCart.value);
  console.log(openMyCart);
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
        <hr className="accInfoHR"></hr>
        <div className="loginAndRegisterContainer">
          <MenuItem onClick={() => dispatch(open())} sx={{ fontWeight: 600 }}>
            <LoginIcon></LoginIcon> Log In
          </MenuItem>
          <hr></hr>
          <MenuItem
            onClick={() => dispatch(openRegisterFunction())}
            sx={{ fontWeight: 600 }}
          >
            <HowToRegIcon></HowToRegIcon> Register
          </MenuItem>
        </div>
        <hr className="accInfoHR"></hr>
        <MenuItem
          className="myCartButtonContainer"
          onClick={toggleDrawer("right", true)}
          sx={{ fontWeight: 600 }}
        >
          <ShoppingCartIcon></ShoppingCartIcon>My Cart
        </MenuItem>
        <hr className="accInfoHR"></hr>
        <h6 style={{ textAlign: "center" }}>Fitness Made Eazy</h6>
      </Menu>
      <Login openLogin={openLogin} setOpenLogin={setOpenLogin}></Login>
      <Register
        openRegister={openRegister}
        setOpenRegister={setOpenRegister}
      ></Register>

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
