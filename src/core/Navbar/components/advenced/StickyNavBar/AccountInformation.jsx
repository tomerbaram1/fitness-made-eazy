import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
const AccountInformation = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    // <div>
    //   <div className="accountIconContainer">
    //     <a href="">
    //       <AccountCircleIcon className="accountIcon"></AccountCircleIcon>
    //     </a>
    //   </div>
    //   <div className="accountContainer">
    //     <div className="accountItem"></div>
    //     <div className="accountItem"></div>
    //     <div className="accountItem"></div>
    //   </div>
    // </div>
    <div>
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
        <MenuItem onClick={handleClose} sx={{ fontWeight: 600 }}>
          <LoginIcon></LoginIcon> Log In
        </MenuItem>
        <hr></hr>
        <MenuItem onClick={handleClose} sx={{ fontWeight: 600 }}>
          <HowToRegIcon></HowToRegIcon> Register
        </MenuItem>

        <hr></hr>
        <MenuItem onClick={handleClose} sx={{ fontWeight: 600 }}>
          <ShoppingCartIcon></ShoppingCartIcon>My Cart
        </MenuItem>
      </Menu>
      <Login></Login>
    </div>
  );
};
export default AccountInformation;
