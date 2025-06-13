import React, { useState, useEffect, useRef } from "react";
import "./feePayment.css";
import FeePaymentHeader from "./Header";
import FeePaymentTable from "./feePayment";
import AddNewFeeField from "./AddFeildForm";
// import Footer from "../Footer/Footer";

const FeePaymentYearMasters = ({setIsFooterVisible}) => {
  const [tableData, setTableData] = useState(
    Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      academicId: "2022-2024",
      joinYear: "Value",
      academicYear: "Value",
      classId: "Value",
      receiptStatus: "Value",
      status: "Value",
      fyStartOn: "2022-2024",
      fyEndOn: "Value",
      startOn: "Value",
      endOn: "Value",
      Next_Academic_Id:"Value",
      Prev_Academic_Id:"Value",
      // CreatedOn:"Value",
      // CreatedBy:"Value",
      // UpdatedOn:"Value",
      // UpdatedBy:"Value",
      App_Sales:"Value",
      Confirmation:"Value",
      Concession_Request:"Value",
      

    }))
  );



  const [currentPage, setCurrentPage] = useState(1);
  const [isAddNewField, setIsAddNewField] = useState(false);
  // const [isFooterVisible, setIsFooterVisible] = useState(true);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  const tableWrapperRef = useRef(null);
  const headerRef = useRef(null);
  const lastScrollTop = useRef(0);
  const [saveError, setSaveError] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);


  const [newRow, setNewRow] = useState({
    academicId: "",
    joinYear: "",
    academicYear: "",
    classId: "",
    receiptStatus: "",
    status: "",
    fyStartOn: "",
    fyEndOn: "",
    startOn: "",
    endOn: "",
    Next_Academic_Id: "",
    Prev_Academic_Id: "",
    // CreatedOn: "",
    // CreatedBy: "",
    // UpdatedOn: "",
    // UpdatedBy: "",
    App_Sales: "",
     Confirmation: "",
      Concession_Request: "",

  });

  const rowsPerPage = 15;
  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  const handleAddNewField = () => {
    setIsAddNewField(true);
    setNewRow({
      academicId: "",
      joinYear: "",
      academicYear: "",
      classId: "",
      receiptStatus: "",
      status: "",
      fyStartOn: "",
      fyEndOn: "",
      startOn: "",
      endOn: "",
      Next_Academic_Id: "",
    Prev_Academic_Id: "",
    // CreatedOn: "",
    // CreatedBy: "",
    // UpdatedOn: "",
    // UpdatedBy: "",
    App_Sales: "",
     Confirmation: "",
      Concession_Request: "",

    });
    setSaveError(null);
    setSaveSuccess(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRow((prev) => ({ ...prev, [name]: value }));
  };

 const handleSave = async (e) => {
  e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/fee/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRow),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Data saved successfully:", result);

      const newEntry = {
        id: tableData.length + 1,
        ...newRow,
      };
      setTableData([newEntry, ...tableData]);
      setIsAddNewField(false);
      setSaveSuccess(true);
      setSaveError(null);
    } catch (error) {
      console.error("Error saving data:", error);
      setSaveError(error.message);
      setSaveSuccess(false);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

// useEffect(() => {
//   const tableWrapper = tableWrapperRef.current;

//   if (!tableWrapper) return;

//   const handleScroll = () => {
//     const scrollTop = tableWrapper.scrollTop;
//     const scrollDelta = scrollTop - lastScrollTop.current;

//     // If at the top (scrollTop <= 0), keep footer hidden
//     if (scrollTop <= 0) {
//       setIsFooterVisible(false);
//     }
//     // If scrolling down by more than 5px, show footer
//     else if (scrollDelta => 5) {
//       setIsFooterVisible(true);
//     }
//     // If scrolling up or small downward scroll, hide footer
//     else if (scrollDelta < 0 || scrollDelta <= 5) {
//       setIsFooterVisible(false);
//     }

//     // Update last scroll position
//     lastScrollTop.current = scrollTop;
//   };

//   tableWrapper.addEventListener("scroll", handleScroll);
//   return () => {
//     tableWrapper.removeEventListener("scroll", handleScroll);
//   };
// }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

useEffect(() => {
    const tableWrapper = tableWrapperRef.current;
    if (!tableWrapper) return;

    const handleScroll = () => {
      const scrollTop = tableWrapper.scrollTop;
       const scrollHeight = tableWrapper.scrollHeight;
      const clientHeight = tableWrapper.clientHeight;

    // // Header scroll effect
    //   setIsHeaderScrolled(scrollTop > 30);
      
       // Footer visibility logic (applies to both desktop and mobile)
      if (scrollTop > lastScrollTop.current && scrollTop > 10) {
        setIsFooterVisible(false);
      } else if (scrollTop < lastScrollTop.current || scrollTop <= 10) {
        setIsFooterVisible(true);
      }
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        setIsFooterVisible(false);
      }

      // Update last scroll position
      lastScrollTop.current = scrollTop;
    };

    tableWrapper.addEventListener("scroll", handleScroll);
    return () => {
      tableWrapper.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div className="fee-payment-wrapper" ref={tableWrapperRef}>
        <div ref={headerRef} className="header-container">
          <FeePaymentHeader
            isAddNewField={isAddNewField}
            onAddNewField={handleAddNewField}
            isScrolled={isHeaderScrolled}
          />
        </div>

        {isAddNewField ? (
      <div>
            <AddNewFeeField
              newRow={newRow}
              onChange={handleChange}
              onSave={handleSave}
            />
            {saveSuccess && (
              <p style={{ color: "green", textAlign: "center" }}>
                Data saved successfully!
              </p>
            )}
            {saveError && (
              <p style={{ color: "red", textAlign: "center" }}>
                Error: {saveError}
              </p>
            )}
          </div>
          
        ) : (
          <>
            <FeePaymentTable/>
            <div className="footer-section">
              <p className="pro-tip">
                ProTip! Check twice before editing the masters data
              </p>
              <div className="pagination">
                <span>
                  {currentPage}-{totalPages} of {totalPages}
                </span>
                <button
                  onClick={handlePrev}
                  className="prev-btn"
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <button
                  onClick={handleNext}
                  className="next-btn"
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
       
      </div>

       {/* <Footer isVisible={isFooterVisible} /> */}
    </>
  );
};

export default FeePaymentYearMasters;