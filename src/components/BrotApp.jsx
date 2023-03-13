import React from "react";
import Header from './Header';
import BrotLogic from './BrotLogic';
import Navbar from './Navbar';
import '../styles/app.css';

function BrotApp() {
  
  return (
      <>
        <Navbar />
        <div className="stocks">
        <Header />
        <BrotLogic />
        </div>
      </>
      );
  }
  export default BrotApp;