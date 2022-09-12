import Navbar from "../../core/Navbar/Navbar";
import Main from "../../core/Main/Main";
import Articales from "../../core/Articales/Articales";
import Footer from "../../core/Footer/Footer";

import { CssBaseline } from "@mui/material";

const Home = () => {
  return (
    <div>
      <CssBaseline />
      <Navbar haveAbout={true}></Navbar>
      <Main></Main>

      <Articales></Articales>
      <Footer></Footer>
    </div>
  );
};

export default Home;
