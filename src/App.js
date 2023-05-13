import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import MyNav from "./components/MyNav";
import Header from "./components/Header";
import Frustration from "./components/Frustration";
import PerfectSolution from "./components/PerfectSolution";
import Reason from "./components/Reason";
import OurBlogs from "./components/OurBlogs";
import OurPartner from "./components/OurPartner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetTouch from "./components/GetTouch";
import Footer from "./components/Footer";
import Research from "./components/Research";
import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      delay: 100,
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <Preloader />
      <MyNav />
      <Header />
      <OurPartner />
      <Frustration />
      <PerfectSolution />
      <Reason />
      <Research />
      <OurBlogs />
      <GetTouch />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
