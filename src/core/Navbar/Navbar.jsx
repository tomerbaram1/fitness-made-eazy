import StickyNavBar from "./components/advenced/StickyNavBar/StickyNavBar.jsx";
import logo from "./img/logo.png";

const Navbar = (props) => {
  return (
    <StickyNavBar
      color="deepSpace"
      title="Fitness Made Eazy"
      logo={logo}
      items={[
        { title: "Home", link: "/" },
        { title: "About Us", link: "/AboutUs" },
        { title: "Programs", link: "/Programs" },
      ]}
      haveSearch={false}
    ></StickyNavBar>
  );
};

export default Navbar;
