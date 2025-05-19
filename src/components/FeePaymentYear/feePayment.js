import React from "react";
import searchicon from "../../assets/Vector.png";
import view from "../../assets/view.png";
import edit from "../../assets/lucide_edit.png";

const FeePaymentTable = ({ data }) => {
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td className="firstCol">
                <input type="checkbox" />
              </td>
              <td className="academicId">{row.academicId}</td>
              <td>{row.joinYear}</td>
              <td>{row.academicYear}</td>
              <td>{row.classId}</td>
              <td>{row.receiptStatus}</td>
              <td>{row.status}</td>
              <td>{row.fyStartOn}</td>
              <td>{row.fyEndOn}</td>
              <td>{row.startOn}</td>
              <td>{row.endOn}</td>
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
