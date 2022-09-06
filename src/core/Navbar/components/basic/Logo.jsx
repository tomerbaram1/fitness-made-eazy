import "./css/logo.css";

const Logo = (props) => {
  return (
    <div className="logoContainer">
      <img className="logo" src={props.logo} alt="" />
    </div>
  );
};
export default Logo;
