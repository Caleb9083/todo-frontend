import "./App.css";
import React, { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "../src/components/Navbar/NavbarComponent";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import DashboardIndex from "./DashboardIndex";
import { UserContext } from "./context/userContext";

function App() {
  const [user, setUser] = useState({
    isLoggedIn: false,
  });
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <BrowserRouter>
          <NavbarComponent />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
            <DashboardIndex />
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
