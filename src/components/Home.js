import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import AI from "../pages/ai";
import CV from "../pages/cv";
import Main from "../pages/main";
import Incomplete from "../pages/incomplete";

const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/incomplete" element={<Incomplete />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;
