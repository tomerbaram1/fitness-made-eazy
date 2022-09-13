// import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import { useDispatch, useSelector } from "react-redux";
import { closeRegisterFunction } from "../../../../reducers/OpenRegisterSlice";
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import { Formik } from "formik";
import * as React from "react";
import "./css/register.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: grey[100],

  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontStyle: "italic",
};

export default function TransitionsModal() {
  const openRegister = useSelector((state) => state.openRegister.value);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeRegisterFunction());
    setShowOverlay(false);
  };

  const [localValues, setlocalValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setlocalValues({
      ...localValues,
      showPassword: !localValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [showOverlay, setShowOverlay] = React.useState(false);
  return (
    <div>
      <div className={showOverlay ? "RegisterOverlay" : ""}></div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Required";
          } else if (!/(?=.*[a-zA-Z])/i.test(values.firstName)) {
            errors.firstName = "Invalid first name ";
          } else if (values.firstName.length < 2) {
            errors.firstName = "Invalid first name ";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          } else if (!/(?=.*[a-zA-Z])/i.test(values.lastName)) {
            errors.lastName = "Invalid last name ";
          } else if (values.lastName.length < 2) {
            errors.lastName = "Invalid last name ";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 6) {
            errors.password = "password to short";
          }
          if (!values.repeatPassword) {
            errors.repeatPassword = "Required";
          } else if (values.repeatPassword !== values.password) {
            errors.repeatPassword = "passwords do not match";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openRegister}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <form onSubmit={handleSubmit}>
              <Fade in={openRegister}>
                <Box sx={style}>
                  <Typography
                    id="transition-modal-title"
                    variant="h6"
                    component="h2"
                  ></Typography>
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-firstName">
                      First Name
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-firstName"
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange("firstName")}
                      onBlur={handleBlur}
                    />
                    <p style={{ color: "darkred" }}>
                      {errors.firstName &&
                        touched.firstName &&
                        errors.firstName}
                    </p>
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-lastName">
                      Last Name
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-lastName"
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange("lastName")}
                      onBlur={handleBlur}
                    />
                    <p style={{ color: "darkred" }}>
                      {errors.lastName && touched.lastName && errors.lastName}
                    </p>
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-email">
                      Email
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-email"
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange("email")}
                      onBlur={handleBlur}
                    />
                    <p style={{ color: "darkred" }}>
                      {errors.email && touched.email && errors.email}
                    </p>
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">
                      Password
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-password"
                      name="password"
                      type={localValues.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      onBlur={handleBlur}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {localValues.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <p style={{ color: "darkred" }}>
                      {errors.password && touched.password && errors.password}
                    </p>
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-repeatPassword">
                      Repeat Password
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-repeatPassword"
                      name="repeatPassword"
                      type={localValues.showPassword ? "text" : "password"}
                      value={values.repeatPassword}
                      onChange={handleChange("repeatPassword")}
                      onBlur={handleBlur}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {localValues.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <p style={{ color: "darkred" }}>
                      {errors.repeatPassword &&
                        touched.repeatPassword &&
                        errors.repeatPassword}
                    </p>
                  </FormControl>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                  >
                    REGISTER
                  </Button>
                </Box>
              </Fade>
            </form>
          </Modal>
        )}
      </Formik>
    </div>
  );
}
