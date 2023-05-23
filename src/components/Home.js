import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import AI from "../pages/ai";
import Resume from "../pages/resume";
import Main from "../pages/main";

const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/ai" element={<AI />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Home;
