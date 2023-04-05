import React, { useState } from "react";

const initialFormState = {
  firstName: "",
  lastName: "",
  //   profilePic: null,
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
  const [bolin, setBolin] = useState(false);

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
    } = inputArr[i];
    setFormData({
      firstName,
      lastName,
      placeOfBirth,
      birthDate,
      addressLine1,
      addressLine2,
      phoneNumber,
    });
    setBolin(true);
    setIndex(i);
  }

  //   const handleFileChange = (event) => {
  //     const file = event.target.files[0];
  //     setFormData({
  //       ...formData,
  //       profilePic: file,
  //     });
  //   };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    const errors = validateFormData();
    if (Object.keys(errors).length === 0) {
      if (bolin) {
        // If bolin is true, then we need to update existing data.
        const updatedArr = [...inputArr];
        updatedArr[index] = formData;
        setInputArr(updatedArr);
        setBolin(false);
        setIndex(null);
      } else {
        // Otherwise, create new data.
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
  }

  const validateFormData = () => {
    const errors = {};
    const currentDate = new Date();
    const eighteenYearsAgo = new Date(
      currentDate.getFullYear() - 18,
      currentDate.getMonth(),
      currentDate.getDate()
    );
    const birthDate = new Date(formData.birthDate);
    if (!formData.firstName || formData.firstName.length < 2) {
      errors.firstName = "First name should be at least 2 characters long.";
    }
    if (!formData.lastName || formData.lastName.length < 2) {
      errors.lastName = "Last name should be at least 2 characters long.";
    }

    // if (
    //   formData.profilePic &&
    //   !/^image\/(jpeg|png)$/.test(formData.profilePic.type)
    // ) {
    //   errors.profilePic = "Profile pic should be a JPG or PNG file.";
    // }
    if (!formData.birthDate || birthDate > eighteenYearsAgo) {
      errors.birthDate = "Birth date should be at least 18 years before.";
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

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        {/* <div>
        <label htmlFor="profilePic">profilePic</label>
        <input
          type="file"
          id="profilePic"
          name="profilePic"
          //   value={formData.profilePic}
          accept="image/png, image/jpg, image/jpeg"
          onChange={handleFileChange}
        />
        {formErrors.profilePic && <span>{formErrors.profilePic}</span>}
      </div> */}
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          {formErrors.firstName && <span>{formErrors.firstName}</span>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          {formErrors.lastName && <span>{formErrors.lastName}</span>}
        </div>
        <div>
          <label htmlFor="phoneNumber">DOB</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
          />
          {formErrors.birthDate && <span>{formErrors.birthDate}</span>}
        </div>
        <div>
          <label htmlFor="placeOfBirth">placeOfBirth</label>
          <input
            type="text"
            id="placeOfBirth"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleInputChange}
          />
          {formErrors.placeOfBirth && <span>{formErrors.placeOfBirth}</span>}
        </div>
        <div>
          <label htmlFor="phoneNumber">phoneNumber</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          {formErrors.phoneNumber && <span>{formErrors.phoneNumber}</span>}
        </div>

        <div>
          <label htmlFor="phoneNumber">addressLine1</label>
          <textarea
            type="textarea"
            id="addressLine1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleInputChange}
          />
          {formErrors.addressLine1 && <span>{formErrors.addressLine1}</span>}
        </div>
        <div>
          <label htmlFor="phoneNumber">addressLine2</label>
          <textarea
            type="textarea"
            id="addressLine2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleInputChange}
          />
          {formErrors.addressLine2 && <span>{formErrors.addressLine2}</span>}
        </div>

        <button onClick={!bolin ? onHandleSubmit : onHandleUpdate}>
          {!bolin ? `Submit` : `Update`}
        </button>
      </form>
      <table border="1" width="100%">
        <tr>
          <td>Profile Photo</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>DOB</td>
          <td>Place Of Birth</td>
          <td>Phone Number</td>
          <td>Address</td>
          <td>Update</td>
          <td>Delete</td>
        </tr>

        {inputArr &&
          inputArr.map((item, i) => {
            return (
              <tr key={i}>
                <td>console.log("profile photo")</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.birthDate}</td>
                <td>{item.placeOfBirth}</td>
                <td>{item.phoneNumber}</td>
                <td>
                  {item.addressLine1},{item.addressLine2}
                </td>
                <td>
                  <button onClick={() => onUpdate(i)}>Update</button>
                </td>
                <td>
                  <button onClick={() => onDelete(i)}>Delete</button>
                </td>
              </tr>
            );
          })}
      </table>
    </>
  );
};

export default Form;
