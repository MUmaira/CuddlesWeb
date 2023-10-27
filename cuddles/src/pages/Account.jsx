import React, { useEffect, useState } from "react";
import "../styles/Account.css";
import { db, auth } from "../config/firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

const Form = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    contactNumber: "",
    designation: "",
  });

  const usersCollectionRef = collection(db, "caretakers");
  const userId = auth.currentUser.uid;

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const userDocRef = doc(usersCollectionRef, userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser(userData);
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    getUserDetails();
  }, [userId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

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
            value={user.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <p className="p">Last Name</p>
          <input
            className="input"
            type="text"
            placeholder="Last name"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <p className="p">Address</p>
      <input
        className="input"
        type="text"
        placeholder="Address"
        name="address"
        value={user.address}
        onChange={handleInputChange}
      />
      <p className="p">Email</p>
      <input
        className="input"
        type="text"
        placeholder="Email"
        name="email"
        value={user.email}
        onChange={handleInputChange}
      />
      <div className="input-row">
        <div className="input-container">
          <p className="p">Contact Number</p>
          <input
            className="input"
            type="text"
            placeholder="Contact Number"
            name="contactNumber"
            value={user.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <p className="p">Designation</p>
          <input
            className="input"
            type="text"
            placeholder="Designation"
            name="designation"
            value={user.designation}
            onChange={handleInputChange}
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
