import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./Pages/Homepage";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";

const useStyles = {
  backgroundColor: "#f0f0f0",
  color: "f0f0f0",
  minHeight: "100vh",
};

function App() {
  return (
    <BrowserRouter>
      <div style={useStyles}>
        <Header />
        <Footer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
