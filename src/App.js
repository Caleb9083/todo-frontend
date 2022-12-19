import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "../src/components/Navbar/NavbarComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <div className="pages">
          <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
