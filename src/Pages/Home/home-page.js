/* eslint-disable react-hooks/exhaustive-deps */

import NavBar from "../../components/navbar/navigation-top";
import "../../styles/home-page-styles.css";
import WelcomeText from "../../components/welcome-text-home/welcome-text";
import Footer from "../../components/footer/Footer";
import AboutHome from "../../components/about-home/aboutHome";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <WelcomeText />
      <AboutHome />
      <Footer />
    </>
  );
}
