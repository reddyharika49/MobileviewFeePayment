import React ,{useState,useEffect}from "react";
import searchicon from "../../assets/Vector.png";
import view from "../../assets/view.png";
import edit from "../../assets/lucide_edit.png";

const FeePaymentTable = () => {
  const [feePayment, setFeePayment] = useState([]);
    useEffect(()=>{
       const handleData = async()=>{
        try{
        const response = await fetch("http://localhost:8080/fee/getUsers");
        const result = await response.json();
        setFeePayment(result);
        console.log(result);
        }
        catch(error){
          console.log(error);
        }
       }  
       handleData();
    },[])
  return (
    <div className="table-section">
      <table className="data-table">
        <thead>
          <tr>
            <th
              className="firstrow"
              style={{
                borderTopLeftRadius: "10px",
                backgroundColor: "rgba(246, 248, 249, 1)",
                position: "sticky",zIndex:"999"
               
              }}
            ></th>
            <th>Academic ID</th>
            <th>Join Year</th>
            <th>Academic Year</th>
            <th>Class ID</th>
            <th>Receipt Status</th>
            <th>Status</th>
            <th>FY Start On</th>
            <th>FY End On</th>
            <th>Start On</th>
            <th>End On</th>
            <th>Next_Academic_Id</th>
            <th>Prev_Academic_Id</th>
            {/* <th>CreatedOn</th>
            <th>CreatedBy</th>
            <th>UpdatedOn</th>
            <th>UpdatedBy</th> */}
            <th>App_Sales</th>
            <th>Confirmation</th>
            <th>Concession_Request</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {feePayment.map((row) => (
            <tr key={row.id}>
              <td className="firstCol">
                <input type="checkbox" />
              </td>
              <td className="academicId">{row.academic_id}</td>
              <td>{row.join_year}</td>
              <td>{row.academic_year}</td>
              <td>{row.class_id}</td>
              <td>{row.receipt_status}</td>
              <td>{row.status}</td>
              <td>{row.fy_start_on}</td>
              <td>{row.fy_end_on}</td>
              <td>{row.start_on}</td>
              <td>{row.end_on}</td>
              <td>{row.next_academic_id}</td>
              <td>{row.prev_academic_id}</td>
              {/* <td>{row.CreatedOn}</td>
              <td>{row.CreatedBy}</td>
              <td>{row.UpdatedOn}</td>
              <td>{row.UpdatedBy}</td> */}
              <td>{row.app_sales}</td>
              <td>{row.confirmation}</td>
              <td>{row.concession_request}</td>
              <td>
                <div className="actions">
                  <img src={searchicon} alt="search" className="searchicon" />
                  <button className="edit-btn">
                    <img src={edit} alt="edit" />
                    <span style={{ color: "blue" }}> Edit</span>
                  </button>
                  <div className="view-btn">
                    <img src={view} alt="view" />
                    <p>View</p>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeePaymentTable;
