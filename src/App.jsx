import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Blogs from "./sections/Blogs";
import Contact from "./sections/Contact";
import Explore from "./sections/Explore";
import HowItWorks from "./sections/HowItWorks";
import Reviews from "./sections/Reviews";
import Wallpaper from "./sections/Wallpaper";

function App() {
  return (
    <>
      <Header />
      <main>
        <Wallpaper />
        <HowItWorks />
        <Explore />
        <Reviews />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
