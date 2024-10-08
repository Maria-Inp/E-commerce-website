import { Route, Routes } from "react-router-dom";

//components
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/E-commerce-website/" element={<HomePage />} />
        <Route path="/E-commerce-website/signup" element={<SignUp />} />
        <Route path="/E-commerce-website/login" element={<Login />} />
        <Route path="/E-commerce-website/contact" element={<Contact />} />
        <Route path="/E-commerce-website/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
