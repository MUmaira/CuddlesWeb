import React from "react";
import "../styles/Account.css";

const Form = () => {
  return (
    <form className="form">
      <h2 style={{ marginBottom: "40px" }}> Personal Information </h2>
      <div className="input-row">
        <div className="input-container">
          <p className="p">First Name</p>
          <input
            className="input"
            type="text"
            placeholder="First name"
            name="firstName"
          />
        </div>
        <div className="input-container">
          <p className="p">Last Name</p>
          <input
            className="input"
            type="text"
            placeholder="Last name"
            name="lastName"
          />
        </div>
      </div>
      <p className="p">Address</p>
      <input
        className="input"
        type="text"
        placeholder="Address"
        name="address"
      />
      <p className="p">Email</p>
      <input className="input" type="text" placeholder="Email" name="email" />
      <div className="input-row">
        <div className="input-container">
          <p className="p">Contact Number</p>
          <input
            className="input"
            type="text"
            placeholder="Contact Number"
            name="contactNumber"
          />
        </div>
        <div className="input-container">
          <p className="p">Designation</p>
          <input
            className="input"
            type="text"
            placeholder="Designation"
            name="designation"
          />
        </div>
      </div>
      <div className="buttons-container">
        <button className="upload-button" type="button">
          Upload Photo
        </button>
        <button className="button" type="submit">
          Confirm and Save
        </button>
      </div>
    </form>
  );
};

export default Form;
