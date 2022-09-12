import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./about.css";
import AboutContainer from "./AboutContainer";

export default function About() {
  return (
    <div className="about">
      <Navbar />
      <AboutContainer />
      <br />

      <Footer />
    </div>
  );
}
