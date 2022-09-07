// import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../../../../reducers/OpenLoginSlice";
// import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
import "./css/login.css";
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontStyle: "italic",
};

export default function TransitionsModal() {
  const openLogin = useSelector((state) => state.openLogin.value);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    dispatch(open());
    setShowOverlay(true);
  };
  const handleClose = () => {
    dispatch(close());
    setShowOverlay(false);
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [showOverlay, setShowOverlay] = React.useState(false);
  return (
    <div>
      <div className={showOverlay ? "LoginOverlay" : ""}></div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openLogin}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openLogin}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {/* <h1 className="loginTitle">login</h1> */}
            </Typography>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
              <InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
              <FilledInput
                id="filled-adornment-email"
                type="email"
                value={values.email}
                onChange={handleChange("email")}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button variant="contained">LOGIN</Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
