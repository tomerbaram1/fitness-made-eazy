import StickyNavBar from "./components/advenced/StickyNavBar/StickyNavBar.jsx";
import logo from "./img/logo.png";

const Navbar = (props) => {
  return (
    <StickyNavBar
      color="deepSpace"
      title="Fitness Made Eazy"
      logo={logo}
      items={
        props.haveAbout
          ? [
              { title: "Home", link: "/" },
              { title: "About", link: "/#aboutPage" },
              { title: "Programs", link: "/Programs" },
            ]
          : [
              { title: "Home", link: "/" },
              { title: "Programs", link: "/Programs" },
            ]
      }
      haveSearch={false}
    ></StickyNavBar>
  );
};

export default Navbar;
