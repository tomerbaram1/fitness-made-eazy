import StickyNavBar from "./components/advenced/StickyNavBar/StickyNavBar.jsx";
import logo from "./img/logo.png";

const Navbar = () => {
  return (
    <StickyNavBar
      color="deepSpace"
      title="Fitness Made Eazy"
      logo={logo}
      items={[
        { title: "Home", link: "" },
        { title: "About", link: "" },
        { title: "Programs", link: "" },
      ]}
    ></StickyNavBar>
  );
};

export default Navbar;
