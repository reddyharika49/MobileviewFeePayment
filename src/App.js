import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import  {SideBar}  from "./components/SideBar/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./components/StudentMasters/Students";
import FeePaymentYear from "./components/FeePaymentYear/FeePaymentYearMasters";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
function App() {
  const[isFooterVisible,setIsFooterVisible]=useState(true);
  return (
    <BrowserRouter>
      <div className="layout-container">
        <div class="navbar">
          <Navbar />
        </div>

        <div className="app-container">
          <div class="sidebar">
            <SideBar></SideBar>
          </div>
          <div className="routes">
            <Routes className="routes">
              <Route path="/students" element={<Student/>} />
              <Route path="/feePayment" element={<><FeePaymentYear setIsFooterVisible={setIsFooterVisible}/></>} />
            </Routes>
          </div>
        </div>
       <Footer isVisible={isFooterVisible}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
