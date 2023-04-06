import React, { useState } from "react";

const initialFormState = {
  firstName: "",
  lastName: "",
  profilePic: null,
  birthDate: "",
  placeOfBirth: "",
  addressLine1: "",
  addressLine2: "",
  phoneNumber: "",
};

const Form = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [inputArr, setInputArr] = useState([]);
  const [index, setIndex] = useState();
  const [triggerForUpdateSubmit, setTriggerForUpdateSubmit] = useState(false);

  let {
    firstName,
    lastName,
    placeOfBirth,
    birthDate,
    addressLine1,
    addressLine2,
    phoneNumber,
  } = formData;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function onDelete(i) {
    // console.log(i,"this index i want to delete.");
    let deleteArr = [...inputArr];
    deleteArr.splice(i, 1);
    setInputArr(deleteArr);
  }

  function onUpdate(i) {
    let {
      firstName,
      lastName,
      placeOfBirth,
      birthDate,
      addressLine1,
      addressLine2,
      phoneNumber,
      profilePic,
    } = inputArr[i];
    setFormData({
      firstName,
      lastName,
      placeOfBirth,
      birthDate,
      addressLine1,
      addressLine2,
      phoneNumber,
      profilePic,
    });
    setTriggerForUpdateSubmit(true);
    setIndex(i);
  }

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   console.log(event.target.files[0]);

  //   setFormData({
  //     ...formData,
  //     profilePic: file,
  //   });
  // };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    const errors = validateFormData();
    if (Object.keys(errors).length === 0) {
      if (triggerForUpdateSubmit) {
        const updatedArr = [...inputArr];
        updatedArr[index] = formData;
        setInputArr(updatedArr);
        setTriggerForUpdateSubmit(false);
        setIndex(null);
      } else {
        setInputArr([...inputArr, formData]);
      }
      setFormData(initialFormState);
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  function onHandleUpdate() {
    let updatedArr = [...inputArr];

    updatedArr.splice(index, 1, {
      firstName,
      lastName,
      placeOfBirth,
      birthDate,
      addressLine1,
      addressLine2,
      phoneNumber,
    });
    setInputArr(updatedArr);
  }

  const validateFormData = () => {
    const errors = {};
    const currentDate = new Date();

    const birthDate = new Date(formData.birthDate);
    if (!formData.firstName || formData.firstName.length < 2) {
      errors.firstName = "First name should be at least 2 characters long.";
    }
    if (!formData.lastName || formData.lastName.length < 2) {
      errors.lastName = "Last name should be at least 2 characters long.";
    }

    // if (
    //   !formData.profilePic &&
    //   !/^(image\/(jpg|jpeg|png))$/.test(formData.profilePic.type)
    // ) {
    //   errors.profilePic = "Profile pic should be a JPG or PNG file.";
    // }
    if (!formData.birthDate || birthDate > currentDate) {
      errors.birthDate = "A birthday cannot be from future.";
    }
    if (!formData.placeOfBirth || formData.placeOfBirth.length < 2) {
      errors.placeOfBirth =
        "Place of birth should be at least 2 characters long.";
    }
    if (!formData.addressLine1 || formData.addressLine1.length < 5) {
      errors.addressLine1 =
        "Address line 1 should be at least 5 characters long.";
    }
    if (!formData.addressLine2 || formData.addressLine2.length < 5) {
      errors.addressLine2 =
        "Address line 2 should be at least 5 characters long.";
    }
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number should be a 10-digit number.";
    }
    return errors;
  };
  // ================================================================================================
  return (
    <>
      <form
        onSubmit={onHandleSubmit}
        className="max-w-3xl mx-auto bg-purple-200 p-6 md:p-8 lg:p-10 xl:p-12 border rounded-md"
      >
        <div className="mb-4 flex justify-center font-bold text-4xl">
          <h1 className="relative bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text ">
            Registration Form
          </h1>
        </div>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block sm:text-lg font-medium text-gray-700 mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 sm:text-lg   bg-white text-gray-900"
          />
          {formErrors.firstName && (
            <span className="text-red-500">{formErrors.firstName}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block font-medium text-gray-700 mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 sm:text-lg bg-white text-gray-900"
          />
          {formErrors.lastName && (
            <span className="text-red-500">{formErrors.lastName}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="birthDate"
            className="block font-medium text-gray-700 mb-2"
          >
            DOB
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 sm:text-lg bg-white text-gray-900"
          />
          {formErrors.birthDate && (
            <span className="text-red-500">{formErrors.birthDate}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="placeOfBirth"
            className="block font-medium text-gray-700 mb-2"
          >
            Place of Birth
          </label>
          <input
            type="text"
            id="placeOfBirth"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 sm:text-lg bg-white text-gray-900"
          />
          {formErrors.placeOfBirth && (
            <span className="text-red-500">{formErrors.placeOfBirth}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block font-medium text-gray-700 mb-2"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 sm:text-lg bg-white text-gray-900 "
          />
          {formErrors.phoneNumber && (
            <span className="text-red-500">{formErrors.phoneNumber}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="addressLine1"
            className="block font-medium text-gray-700 mb-2"
          >
            addressLine1
          </label>
          <textarea
            type="textarea"
            id="addressLine1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 sm:text-lg bg-white text-gray-900"
          />
          {formErrors.addressLine1 && (
            <span className="text-red-500">{formErrors.addressLine1}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="addressLine2"
            className="block font-medium text-gray-700 mb-2"
          >
            addressLine2
          </label>
          <textarea
            type="textarea"
            id="addressLine2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600 sm:text-lg bg-white text-gray-900"
          />
          {formErrors.addressLine2 && (
            <span className="text-red-500">{formErrors.addressLine2}</span>
          )}
        </div>

        <button
          class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline grid justify-center"
          onClick={!triggerForUpdateSubmit ? onHandleSubmit : onHandleUpdate}
        >
          {!triggerForUpdateSubmit ? `Submit` : `Update`}
        </button>
      </form>

      {/* ============================================================================================ */}

      <table className="table-auto border-separate border-spacing-1 w-full mt-10  rounded-md">
        <thead>
          <tr className=" bg-orange-400 text-white uppercase text-sm leading-normal ">
            <th className="py-3 px-6 text-left border rounded-md">
              Profile Photo
            </th>
            <th className="py-3 px-6 text-left border rounded-md">
              First Name
            </th>
            <th className="py-3 px-6 text-left border rounded-md">Last Name</th>
            <th className="py-3 px-6 text-left border rounded-md">DOB</th>
            <th className="py-3 px-6 text-left border rounded-md">
              Place Of Birth
            </th>
            <th className="py-3 px-6 text-left border rounded-md">
              Phone Number
            </th>
            <th className="py-3 px-6 text-left border rounded-md">Address</th>
            <th className="py-3 px-6 text-left border rounded-md">Update</th>
            <th className="py-3 px-6 text-left border rounded-md">Delete</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {inputArr &&
            inputArr.map((item, i) => {
              return (
                <tr
                  key={i}
                  className="border-b bg-orange-100 font-medium hover:bg-gray-100 hover:font-medium"
                >
                  <td className="py-3 px-6 text-left">
                    console.log("profile photo")
                  </td>
                  <td className="py-3 px-6 text-left">{item.firstName}</td>
                  <td className="py-3 px-6 text-left">{item.lastName}</td>
                  <td className="py-3 px-6 text-left">{item.birthDate}</td>
                  <td className="py-3 px-6 text-left">{item.placeOfBirth}</td>
                  <td className="py-3 px-6 text-left">{item.phoneNumber}</td>
                  <td className="py-3 px-6 text-left">
                    {item.addressLine1},{item.addressLine2}
                  </td>
                  <td className="py-3 px-6 text-left">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => onUpdate(i)}
                    >
                      Update
                    </button>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => onDelete(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Form;
