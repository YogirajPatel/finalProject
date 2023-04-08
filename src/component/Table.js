import React from "react";
import "../styles/style.css";

const Table = ({ inputArr, onUpdate, onYogiraj }) => {
  return (
    <>
      <table id="section2" className="table">
        <thead>
          <tr className=" tableHeader ">
            <th className="tableHeader">Profile Photo</th>
            <th className="tableHeader ">First Name</th>
            <th className="tableHeader">Last Name</th>
            <th className="tableHeader">DOB</th>
            <th className="tableHeader">Place Of Birth</th>
            <th className="tableHeader">Phone Number</th>
            <th className="tableHeader">Address</th>
            <th className="tableHeader">Update</th>
            <th className="tableHeader">Delete</th>
          </tr>
        </thead>
        <tbody className="dTableFont">
          {inputArr &&
            inputArr.map((item, i) => {
              return (
                <tr key={i} className="dTableData">
                  <td className="dTablePPtd ">
                    <img
                      src={
                        item.profilePic
                          ? URL.createObjectURL(item.profilePic)
                          : "default-image.jpg"
                      }
                      alt="Your  Will Display Here"
                      className="dTablePP"
                    />
                  </td>
                  <td className="dynamicTable">{item.firstName}</td>
                  <td className="dynamicTable">{item.lastName}</td>
                  <td className="dynamicTable">{item.birthDate}</td>
                  <td className="dynamicTable">{item.placeOfBirth}</td>
                  <td className="dynamicTable">{item.phoneNumber}</td>
                  <td className="dynamicTable">
                    {item.addressLine1},{item.addressLine2}
                  </td>
                  <td className="dTableBtt">
                    <button
                      className="dTableUpdateButt"
                      onClick={() => onUpdate(i)}
                    >
                      Update
                    </button>
                  </td>
                  <td className="dTableBtt">
                    <button
                      className="dTableDeleteButt"
                      onClick={() => onYogiraj(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <a href="#nav">
        <div class=" scrollTopBtt">&#128070;</div>
      </a>
    </>
  );
};

export default Table;
