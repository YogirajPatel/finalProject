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

      <form
        id="section1"
        onSubmit={onHandleSubmit}
        className="max-w-3xl mx-auto bg-transparent backdrop-blur-xl p-6 md:p-8 lg:p-10 xl:p-12 border-4 border-purple-600 rounded-md"
      >
        <div className="mb-4 flex justify-center font-bold text-4xl  ">
          <h1 className=" font-dancing  relative bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text ">
            Registration Form
          </h1>
        </div>

        {formData.profilePic && (
          <div className="flex justify-center ">
            <img
              src={URL.createObjectURL(formData.profilePic)}
              alt="Your Image Will Display Here"
              className="w-40 h-40 rounded-md origin-center border mt-8 border-purple-600 "
            />
          </div>
        )}

        {!formData.profilePic && (
          <div className="flex justify-center items-center mt-8">
            <p className="w-40 h-40 text-center rounded-md border border-purple-600 p-9 font-medium text-white">
              Image Is Not Uploaded Yet.
            </p>
          </div>
        )}

        <div className="mb-4 mt-4 flex justify-center">
          <label
            htmlFor="profilePic"
            className="block sm:text-lg font-medium text-white mb-2 mr-2"
          >
            Profile Picture<span className=" text-red-600">*</span> :
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
            <span className="text-red-600">{formErrors.profilePic}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block sm:text-lg font-semibold text-white mb-2"
          >
            First Name<span className=" text-red-600">*</span> :
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="eg. John"
            className="block w-full px-4 py-2 border rounded-md focus:outline-none  focus:ring-2 focus:ring-purple-600 focus:bg-orange-100  sm:text-lg   bg-white text-gray-900"
          />
          {formErrors.firstName && (
            <span className="text-red-600">{formErrors.firstName}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block font-semibold text-white mb-2"
          >
            Last Name<span className=" text-red-600">*</span> :
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="eg. Doe"
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-orange-100  sm:text-lg bg-white text-gray-900"
          />
          {formErrors.lastName && (
            <span className="text-red-600">{formErrors.lastName}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="birthDate"
            className="block font-semibold text-white mb-2"
          >
            DOB<span className=" text-red-600">*</span> :
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
            placeholder="eg. DD-MM-YYYY "
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-orange-100  sm:text-lg bg-white text-gray-900"
          />
          {formErrors.birthDate && (
            <span className="text-red-600">{formErrors.birthDate}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="placeOfBirth"
            className="block font-semibold text-white mb-2"
          >
            Place of Birth<span className=" text-red-600">*</span> :
          </label>
          <input
            type="text"
            id="placeOfBirth"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleInputChange}
            placeholder="eg. India"
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-orange-100  sm:text-lg bg-white text-gray-900"
          />
          {formErrors.placeOfBirth && (
            <span className="text-red-600">{formErrors.placeOfBirth}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block font-semibold text-white mb-2"
          >
            Phone Number<span className=" text-red-600">*</span> :
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="eg. 2134587695"
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-orange-100  sm:text-lg bg-white text-gray-900 "
          />
          {formErrors.phoneNumber && (
            <span className="text-red-600">{formErrors.phoneNumber}</span>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="addressLine1"
            className="block font-semibold text-white mb-2"
          >
            Address Line 1<span className=" text-red-600">*</span> :
          </label>
          <textarea
            type="textarea"
            id="addressLine1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleInputChange}
            placeholder="House No."
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-orange-100  sm:text-lg bg-white text-gray-900"
          />
          {formErrors.addressLine1 && (
            <span className="text-red-600">{formErrors.addressLine1}</span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="addressLine2"
            className="block font-semibold text-white mb-2"
          >
            Address Line 2<span className=" text-red-600">*</span> :
          </label>
          <textarea
            type="textarea"
            id="addressLine2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleInputChange}
            placeholder="Street And Locality, State, Country"
            className="block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-orange-100  sm:text-lg bg-white text-gray-900"
          />
          {formErrors.addressLine2 && (
            <span className="text-red-600">{formErrors.addressLine2}</span>
          )}
        </div>
        <div className="flex justify-center">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
