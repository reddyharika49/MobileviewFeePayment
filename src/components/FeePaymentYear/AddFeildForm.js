import React from "react";
import "./addFeild.css";
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
            <th>CreatedOn</th>
            <th>CreatedBy</th>
            <th>UpdatedOn</th>
            <th>UpdatedBy</th>
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
                name="academicId"
                value={newRow.academicId}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="joinYear"
                value={newRow.joinYear}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="academicYear"
                value={newRow.academicYear}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="classId"
                value={newRow.classId}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="receiptStatus"
                value={newRow.receiptStatus}
                onChange={onChange}
                className="textfeild"
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
                className="textfeild"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="fyStartOn"
                value={newRow.fyStartOn}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="fyEndOn"
                value={newRow.fyEndOn}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
              />
            </td>
            <td>
              <input
                type="text"
                name="startOn"
                value={newRow.startOn}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
              />
            </td>
            <td>
              <input
                type="text"
                name="endOn"
                value={newRow.endOn}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
              />
            </td>
            <td>
              <input
                type="text"
                name="Next_Academic_Id"
                value={newRow.Next_Academic_Id}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="Prev_Academic_Id"
                value={newRow.Prev_Academic_Id}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="CreatedOn"
                value={newRow.CreatedOn}
                onChange={onChange}
                className="textfeild"
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
                className="textfeild"
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
            </td>
            <td>
              <input
                type="text"
                name="App_Sales"
                value={newRow.App_Sales}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
            <td>
              <input
                type="text"
                name="Confirmation"
                value={newRow.Confirmation}
                onChange={onChange}
                className="textfeild"
                placeholder="Add Value"
                // style={{ color: "#0C0C0C" }}
              />
            </td>
          
            <td>
              <input
                type="text"
                name="Concession_Request"
                value={newRow.Concession_Request}
                onChange={onChange}
                className="textfeild"
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
