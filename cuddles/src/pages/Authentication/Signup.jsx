import { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import CareTaker from "../../Models/CareTaker";
import { useNavigate } from "react-router-dom";
import { auth, db, doc, setDoc, getDocs } from "../../config/firebase";
import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getErrorMessage } from "../../utils/errorMessages";
import { LoaderProvider, useLoader } from "../../context/LoaderContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Signup.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useLoader();
  const [error, setError] = useState({ email: "", password: "" });

  const handleSignUp = async () => {
    setError({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
      designation: "",
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z\s\-']+$/;
    const phoneNumberRegex = /^\d{10}$/;

    if (!firstName) {
      toast.error(`First name is required`);
      setError((prevError) => ({
        ...prevError,
        firstName: "First Name is required",
      }));
      return;
    } else if (!nameRegex.test(firstName)) {
      toast.error(`First name can only contain alphabetic characters`);
      setError((prevError) => ({
        ...prevError,
        firstName: "First name can only contain alphabetic characters",
      }));
      return;
    }

    if (!lastName) {
      toast.error(`Last name is required`);
      setError((prevError) => ({
        ...prevError,
        lastName: "Last Name is required",
      }));
      return;
    } else if (!nameRegex.test(lastName)) {
      toast.error(`Last name can only contain alphabetic characters`);
      setError((prevError) => ({
        ...prevError,
        lastName: "Last name can only contain alphabetic characters",
      }));
      return;
    }

    if (!email) {
      toast.error(`Email is required`);
      setError((prevError) => ({ ...prevError, email: "Email is required" }));
      return;
    } else if (!emailRegex.test(email)) {
      toast.error(`Please enter a valid email`);
      setError((prevError) => ({
        ...prevError,
        email: "Please enter a valid email.",
      }));
      return;
    }

    if (!designation) {
      toast.error(`Designation is required`);
      setError((prevError) => ({
        ...prevError,
        designation: "Designationis required",
      }));
      return;
    }

    if (!password) {
      toast.error(`Password is required`);
      setError((prevError) => ({
        ...prevError,
        password: "Password is required",
      }));
      return;
    }

    if (!phoneNumber) {
      toast.error(`Phone number is required`);
      setError((prevError) => ({
        ...prevError,
        phoneNumber: "Phone Number is required",
      }));
      return;
    } else if (!phoneNumberRegex.test(phoneNumber)) {
      toast.error(`Please enter a valid phone number`);
      setError((prevError) => ({
        ...prevError,
        phoneNumber: "Please enter a valid phone number",
      }));
      return;
    }

    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = userCredential;
      const userDocRef = doc(db, "caretakers", user.uid);

      const newCareTaker = new CareTaker(
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        designation
      );
      const userData = { ...newCareTaker };
      await setDoc(userDocRef, userData);
      toast.success("Account created successfully.");
      navigate("/dashboard");
    } catch (error) {
      error && setIsLoading(false);
      toast.error(`Account creation failed.`);
      const errorCode = error.code;
      const errorMessages = getErrorMessage(errorCode);

      setError((prevError) => ({
        ...prevError,
        email: errorMessages.email,
        password: errorMessages.password,
      }));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <h2 className="regTitle">Create an Account</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="regInput"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            errorMessage={error.firstName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            className="regInput"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            errorMessage={error.lastName}
          />
        </div>
        <div className="divContainer">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="regInput"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            errorMessage={error.email}
          />
        </div>
        <div className="divContainer">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            className="regInput"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            errorMessage={error.address}
          />
        </div>
        <div className="passwordContainer">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="regInput"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            errorMessage={error.password}
          />
        </div>
        <div className="contactContainer">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            className="regInput"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            // onBlur={() => validate('phoneNumber')}
            errorMessage={error.phoneNumber}
          />
        </div>
        <div className="contactContainer">
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            id="designation"
            className="regInput"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            errorMessage={error.designation}
          />
        </div>
        <button
          type="button"
          className="regButton"
          style={{
            backgroundColor: "#9F678C",
            color: "white",
          }}
          onClick={handleSignUp}
        >
          Create Account
        </button>
        <div className="haveAccount">
          <p>
            Already have an account?{" "}
            <span
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
              className="textClick"
            >
              Sign In
            </span>
          </p>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
