import React from "react";
import NavBar from "./NavBar";

const UserForm = ({
  onHandleSubmit,
  formData,
  formErrors,
  handleFileChange,
  handleInputChange,
  fileInputRef,
  triggerForUpdateSubmit,
  onHandleUpdate,
}) => {
  return (
    <>
      <NavBar />

      <form id="section1" onSubmit={onHandleSubmit} className="form">
        <div className="formRegHeadingDiv  ">
          <h1 className="formRegHeading ">Registration Form</h1>
        </div>

        {formData.profilePic && (
          <div className="formPPdiv ">
            <img
              src={URL.createObjectURL(formData.profilePic)}
              alt="Your  Will Display Here"
              className="formPP "
            />
          </div>
        )}

        {!formData.profilePic && (
          <div className="formImgTextDiv">
            <p className="formImgText">Image Is Not Uploaded Yet.</p>
          </div>
        )}

        <div className="ppLableDiv">
          <label htmlFor="profilePic" className="ppLable">
            Profile Picture<span className=" error">*</span> :
          </label>

          <input
            type="file"
            id="profilePic"
            name="profilePic"
            accept="image/png, image/jpg, image/jpeg"
            ref={fileInputRef}
            onChange={handleFileChange}
            className=" text-white "
          />
          {formErrors.profilePic && (
            <span className="error">{formErrors.profilePic}</span>
          )}
        </div>

        <div className="formAllInputDiv">
          <label htmlFor="firstName" className="allFormInput">
            First Name<span className=" error">*</span> :
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="eg. John"
            className="allFormInputInside"
          />
          {formErrors.firstName && (
            <span className="error">{formErrors.firstName}</span>
          )}
        </div>
        <div className="formAllInputDiv">
          <label htmlFor="lastName" className="allFormInput">
            Last Name<span className=" error">*</span> :
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="eg. Doe"
            className="allFormInputInside"
          />
          {formErrors.lastName && (
            <span className="error">{formErrors.lastName}</span>
          )}
        </div>
        <div className="formAllInputDiv">
          <label htmlFor="birthDate" className="allFormInput">
            DOB<span className=" error">*</span> :
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
            placeholder="eg. DD-MM-YYYY "
            className="allFormInputInside"
          />
          {formErrors.birthDate && (
            <span className="error">{formErrors.birthDate}</span>
          )}
        </div>
        <div className="formAllInputDiv">
          <label htmlFor="placeOfBirth" className="allFormInput">
            Place of Birth<span className=" error">*</span> :
          </label>
          <input
            type="text"
            id="placeOfBirth"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleInputChange}
            placeholder="eg. India"
            className="allFormInputInside"
          />
          {formErrors.placeOfBirth && (
            <span className="error">{formErrors.placeOfBirth}</span>
          )}
        </div>
        <div className="formAllInputDiv">
          <label htmlFor="phoneNumber" className="allFormInput">
            Phone Number<span className=" error">*</span> :
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="eg. 2134587695"
            className="allFormInputInside "
          />
          {formErrors.phoneNumber && (
            <span className="error">{formErrors.phoneNumber}</span>
          )}
        </div>

        <div className="formAllInputDiv">
          <label htmlFor="addressLine1" className="allFormInput">
            Address Line 1<span className=" error">*</span> :
          </label>
          <textarea
            type="textarea"
            id="addressLine1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleInputChange}
            placeholder="House No."
            className="allFormInputInside"
          />
          {formErrors.addressLine1 && (
            <span className="error">{formErrors.addressLine1}</span>
          )}
        </div>
        <div className="formAllInputDiv">
          <label htmlFor="addressLine2" className="allFormInput">
            Address Line 2<span className=" error">*</span> :
          </label>
          <textarea
            type="textarea"
            id="addressLine2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleInputChange}
            placeholder="Street And Locality, State, Country"
            className="allFormInputInside"
          />
          {formErrors.addressLine2 && (
            <span className="error">{formErrors.addressLine2}</span>
          )}
        </div>
        <div className="flex justify-center">
          <button
            className="formSubmitButton"
            onClick={!triggerForUpdateSubmit ? onHandleSubmit : onHandleUpdate}
          >
            {!triggerForUpdateSubmit ? `Submit` : `Update`}
          </button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
