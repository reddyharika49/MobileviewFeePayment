import React, { useState, useEffect } from "react";
import filter from "../../assets/Filter.png";
import arrowUp from "../../assets/Arrow up.png";
import plus from "../../assets/plus.png";

const FeePaymentHeader = ({ isAddNewField, onAddNewField,isScrolled }) => {
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 30);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Initial check
  //   handleScroll();

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className={`header-section ${isScrolled ? "scrolled" : ""}`}>
      <div className="breadcrumbs">Masters {">"} Fee Payment Year</div>
      <h1 className="page-title">Fee Payment Year Masters</h1>

      {!isScrolled && (
        <p className="page-subtitle">
          Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.
        </p>
      )}

      <div className="action-buttons">
        <button className="filter-btn">
          <img src={filter} className="filter-img" alt="Filter" />
          Filter
        </button>
        <button className="export-btn">
          <img src={arrowUp} className="export-img" alt="Export" />
          Export
        </button>
        <button
          className="add-field-btn"
          disabled={isAddNewField}
          onClick={onAddNewField}
        >
          <img src={plus} alt="Add" /> Add New Field
        </button>
      </div>
    </div>
  );
};

export default FeePaymentHeader;