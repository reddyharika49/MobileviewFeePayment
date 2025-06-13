import React from "react";
import "./addField.css";
const AddNewFeeField = ({ newRow, onChange, onSave }) => {
  
  return (
    <div className="add-table-section">
      <table className="add-table">
        <thead>
          <tr>
            <th style={{ borderTopLeftRadius: "10px" }}>Academic ID</th>
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
            <th style={{ borderTopRightRadius: "10px" }}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ borderBottomLeftRadius: "10px" }}>
              <input
                type="text"
                name="academic_id"
                value={newRow.academic_id}
                onChange={onChange}
                className="textfield"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="join_year"
                value={newRow.join_year}
                onChange={onChange}
                className="textfield"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="academic_year"
                value={newRow.academic_year}
                onChange={onChange}
                className="textfield"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="class_id"
                value={newRow.class_id}
                onChange={onChange}
                className="textfield"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="receipt_status"
                value={newRow.receipt_status}
                onChange={onChange}
                className="textfield"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="status"
                value={newRow.status}
                onChange={onChange}
                className="textfield"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="fy_start_on"
                value={newRow.fy_start_on}
                onChange={onChange}
                className="textfield"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="fy_end_on"
                value={newRow.fy_end_on}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
              />
            </td>
            <td>
              <input
                type="text"
                name="start_on"
                value={newRow.start_on}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
              />
            </td>
            <td>
              <input
                type="text"
                name="end_on"
                value={newRow.end_on}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
              />
            </td>
            <td>
              <input
                type="text"
                name="next_academic_id"
                value={newRow.next_academic_id}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="prev_academic_id"
                value={newRow.prev_academic_id}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            {/* <td>
              <input
                type="text"
                name="CreatedOn"
                value={newRow.CreatedOn}
                onChange={onChange}
                className="textfield"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
              </td>
              <td>
              <input
                type="text"
                name="CreatedBy"
                value={newRow.CreatedBy}
                onChange={onChange}
                className="textfield"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="UpdatedOn"
                value={newRow.UpdatedOn}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="UpdatedBy"
                value={newRow.UpdatedBy}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td> */}
            <td>
              <input
                type="text"
                name="app_sales"
                value={newRow.app_sales}
                onChange={onChange}
                className="textfield"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="confirmation"
                value={newRow.confirmation}
                onChange={onChange}
                className="textfield"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
          
            <td>
              <input
                type="text"
                name="concession_request"
                value={newRow.concession_request}
                onChange={onChange}
                className="textfield"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td style={{ borderBottomRightRadius: "10px" }}>
              <button className="save-btn" onClick={onSave}>
                <span>Save</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AddNewFeeField;
