import { Route, Routes } from "react-router-dom";

//components
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/E-commerce-website/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}

export default App;
