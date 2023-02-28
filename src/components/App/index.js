import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header/index";
import Landing from "../Landing/index";
import Footer from "../Footer";
import Welcome from "../Welcome";
import Login from "../Login";
import Signup from "../Signup";
import ErrorPage from "../ErrorPage";
import ForgetPassword from "../ForgetPassword";
import { IconContext } from "react-icons";

export default function App() {
  return (
    <BrowserRouter>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <Header />
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </IconContext.Provider>
    </BrowserRouter>
  );
}
