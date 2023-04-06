import React from "react";

const Table = ({ inputArr, onUpdate, onYogiraj }) => {
  return (
    <table className="table-auto border-separate border-spacing-1 w-full mt-10  rounded-md">
      <thead>
        <tr className=" bg-orange-400 text-white uppercase text-sm leading-normal ">
          <th className="py-3 px-6 text-center border rounded-md">
            Profile Photo
          </th>
          <th className="py-3 px-6 text-center border rounded-md ">
            First Name
          </th>
          <th className="py-3 px-6 text-center border rounded-md">Last Name</th>
          <th className="py-3 px-6 text-center border rounded-md">DOB</th>
          <th className="py-3 px-6 text-center border rounded-md">
            Place Of Birth
          </th>
          <th className="py-3 px-6 text-center border rounded-md">
            Phone Number
          </th>
          <th className="py-3 px-6 text-center border rounded-md">Address</th>
          <th className="py-3 px-6 text-center border rounded-md">Update</th>
          <th className="py-3 px-6 text-center border rounded-md">Delete</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 text-sm font-light">
        {inputArr &&
          inputArr.map((item, i) => {
            return (
              <tr
                key={i}
                className="border-b bg-orange-100 font-medium hover:bg-orange-50 hover:font-medium"
              >
                <td className="py-1 px-1 flex justify-center align-middle ">
                  <img
                    src={
                      item.profilePic
                        ? URL.createObjectURL(item.profilePic)
                        : "default-image.jpg"
                    }
                    alt="Your  Will Display Here"
                    className=" m-1 w-16 h-16 rounded-md origin-center border-4 border-purple-600 "
                  />
                </td>
                <td className="py-3 px-3 text-center">{item.firstName}</td>
                <td className="py-3 px-3 text-center">{item.lastName}</td>
                <td className="py-3 px-3 text-center">{item.birthDate}</td>
                <td className="py-3 px-3 text-center">{item.placeOfBirth}</td>
                <td className="py-3 px-3 text-center">{item.phoneNumber}</td>
                <td className="py-3 px-3 text-center">
                  {item.addressLine1},{item.addressLine2}
                </td>
                <td className="py-3 px-6 text-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => onUpdate(i)}
                  >
                    Update
                  </button>
                </td>
                <td className="py-3 px-6 text-center">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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
  );
};

export default Table;
