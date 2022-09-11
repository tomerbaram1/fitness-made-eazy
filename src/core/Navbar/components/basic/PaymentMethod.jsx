// import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import { useSelector, useDispatch } from "react-redux";

// import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
import "./css/payment.css";
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Formik } from "formik";
import { grey } from "@mui/material/colors";

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

const PaymentMethod = (props) => {
  const handleOpen = () => {
    setShowOverlay(true);
  };
  const handleClose = () => {
    props.setOpenPaymentMethod(false);
    setShowOverlay(false);
  };

  const [localValues, setlocalValues] = React.useState({
    firstName: "",
    lastName: "",
    creditNumber: "",
    expiryDate: "",
    cvc: "",

    showCreditNumber: false,
  });

  const localHandleChange = (prop) => (event) => {
    setlocalValues({ ...localValues, [prop]: event.target.value });
  };

  const handleClickShowCreditNumber = () => {
    setlocalValues({
      ...localValues,
      showCreditNumber: !localValues.showCreditNumber,
    });
  };

  const handleMouseDownCreditNumber = (event) => {
    event.preventDefault();
  };
  const [showOverlay, setShowOverlay] = React.useState(false);
  return (
    <div>
      <div className={showOverlay ? "PaymentOverlay" : ""}></div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          creditNumber: "",
          expiryDate: "",
          cvc: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.firstName)
          ) {
            errors.firstName = "Invalid Name ";
          }
          if (!values.lastName) {
            errors.lastName = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.lastName)
          ) {
            errors.lastName = "Invalid Last Name";
          }
          if (!values.creditNumber) {
            errors.creditNumber = "Required";
          } else if (values.creditNumber.length < 16) {
            errors.creditNumber = "creditNumber to short";
          }
          if (!values.expiryDate) {
            errors.expiryDate = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.expiryDate)
          ) {
            errors.expiryDate = "expiry Date to short";
          }
          if (!values.cvc) {
            errors.cvc = "Required";
          } else if (values.cvc.length > 3 && values.cvc.length < 3) {
            errors.cvc = "CVC must be 3 Numbers";
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
            open={props.openPaymentMethod}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <form onSubmit={handleSubmit}>
              <Fade in={props.openPaymentMethod}>
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
                      type="firstName"
                      name="firstName"
                      value={values.email}
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
                    <InputLabel htmlFor="filled-adornment-email">
                      Last Name
                    </InputLabel>

                    <FilledInput
                      id="filled-adornment-lastName"
                      type="lastName"
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
                    <InputLabel htmlFor="filled-adornment-creditNumber">
                      Credit Number
                    </InputLabel>
                    <FilledInput
                      id="filled-adornment-creditNumber"
                      name="creditNumber"
                      type={
                        localValues.showCreditNumber ? "text" : "creditNumber"
                      }
                      value={values.creditNumber}
                      onChange={handleChange("creditNumber")}
                      onBlur={handleBlur}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle creditNumber visibility"
                            onClick={handleClickShowCreditNumber}
                            onMouseDown={handleMouseDownCreditNumber}
                            edge="end"
                          >
                            {localValues.showCreditNumber ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <p style={{ color: "darkred" }}>
                      {errors.creditNumber &&
                        touched.creditNumber &&
                        errors.creditNumber}
                    </p>
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-email">
                      Expiry Date
                    </InputLabel>

                    <FilledInput
                      id="filled-adornment-expiryDate"
                      type="expiryDate"
                      name="expiryDate"
                      value={values.expiryDate}
                      onChange={handleChange("expiryDate")}
                      onBlur={handleBlur}
                    />
                    <p style={{ color: "darkred" }}>
                      {errors.expiryDate &&
                        touched.expiryDate &&
                        errors.expiryDate}
                    </p>
                  </FormControl>
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-email">
                      CVC
                    </InputLabel>

                    <FilledInput
                      id="filled-adornment-cvc"
                      type="cvc"
                      name="cvc"
                      value={values.cvc}
                      onChange={handleChange("cvc")}
                      onBlur={handleBlur}
                    />
                    <p style={{ color: "darkred" }}>
                      {errors.cvc && touched.cvc && errors.cvc}
                    </p>
                  </FormControl>

                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                  >
                    Add Payment Method
                  </Button>
                </Box>
              </Fade>
            </form>
          </Modal>
        )}
      </Formik>
    </div>
  );
};
export default PaymentMethod;
