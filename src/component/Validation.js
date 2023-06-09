import React, { useRef, useState } from "react";
import Table from "./Table";
import UserForm from "./UserForm";
import "../styles/style.css";

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

const Validation = () => {
  const fileInputRef = useRef(null);
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
    profilePic,
  } = formData;

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   const updatedFormData = { ...formData, [name]: value };
  //   setFormData(updatedFormData);
  //   const errors = validateFormData(updatedFormData);
  //   setFormErrors({ ...formErrors, [name]: errors[name] });
  // };
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleFileChange = (event) => {
    // setFormErrors({});
    const file = event.target.files[0];
    // console.log(event.target.files[0]);

    setFormData({
      ...formData,
      profilePic: file || null,
    });
    setFormErrors({ ...formErrors, [event.target.name]: "" });
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
      fileInputRef.current.value = "";
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
      profilePic,
    });
    setInputArr(updatedArr);
  }

  const validateFormData = () => {
    const errors = {};

    const currentDate = new Date();
    const birthDate = new Date(formData.birthDate);

    if (!formData.firstName || formData.firstName.length < 2) {
      errors.firstName =
        "First name is required and should contain at least 2 alphabetical characters.";
    }

    if (!formData.lastName || formData.lastName.length < 2) {
      errors.lastName =
        "Last name is required and should contain at least 2 alphabetical characters.";
    }

    if (
      !formData.profilePic ||
      !/^(image\/(jpg|jpeg|png))$/.test(formData.profilePic?.type)
    ) {
      errors.profilePic = "Profile picture not choosen.";
    }
    if (!formData.birthDate || birthDate > currentDate) {
      errors.birthDate = "Birthdate should not be from future.";
    }
    if (!formData.placeOfBirth || formData.placeOfBirth.length < 2) {
      errors.placeOfBirth =
        "Place of birth is required and it should be at least 2 characters long.";
    }
    if (!formData.addressLine1 || formData.addressLine1.trim().length < 5) {
      errors.addressLine1 =
        "Address Line 1 is required and it should be at least 5 characters long.";
    }
    if (!formData.addressLine2 || formData.addressLine2.trim().length < 5) {
      errors.addressLine2 =
        "Address Line 2 is required and it should be at least 5 characters long.";
    }
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber =
        "Phone number is required and it should be a 10-digit number.";
    }
    return errors;
  };
  return (
    <div className="userform-container">
      <UserForm
        onHandleSubmit={onHandleSubmit}
        formData={formData}
        formErrors={formErrors}
        handleFileChange={handleFileChange}
        handleInputChange={handleInputChange}
        fileInputRef={fileInputRef}
        triggerForUpdateSubmit={triggerForUpdateSubmit}
        onHandleUpdate={onHandleUpdate}
      />
      <div className="userDetailDiv">
        <h1 className="userDetail">User Details</h1>
      </div>

      <Table
        inputArr={inputArr}
        onYogiraj={onDelete}
        onUpdate={onUpdate}
        formErrors={formErrors}
        handleFileChange={handleFileChange}
        handleInputChange={handleInputChange}
        fileInputRef={fileInputRef}
        triggerForUpdateSubmit={triggerForUpdateSubmit}
        onHandleUpdate={onHandleUpdate}
      />
    </div>
  );
};

export default Validation;
