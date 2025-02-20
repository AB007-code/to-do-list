import React, { useState } from "react";

const Form = () => {
  let [input, setInput] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    firstNameErr: "",
    lastNameErr: "",
    mobileErr: "",
    emailErr: "",
    passwordErr: "",
    first: "",
    second: "",
    third: "",
    fourt: "",
    fifth: "",
  });
  const changeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handelform = (e) => {
    e.preventDefault();
    validate();
  };

  let validate = () => {
    let firstNameErr = "";
    let lastNameErr = "";
    let mobileErr = "";
    let emailErr = "";
    let passwordErr = "";
    let first = "";
    let second = "";
    let third = "";
    let fourt = "";
    let fifth = "";
    if (input.firstName.length < 3) {
      firstNameErr = "First Name is Required";
    } else {
      first = "✔";
    }
    if (input.lastName.length < 1) {
      lastNameErr = "Last Name is Required";
    } else {
      second = "✔";
    }
    if (input.mobile.length !== 10) {
      mobileErr = "Mobile Number is Required";
    } else {
      third = "✔";
    }
    if (!input.email.includes("@")) {
      emailErr = "Email is Required";
    } else {
      fourt = "✔";
    }
    if (input.password.length !== 8) {
      passwordErr = "Password is Required";
    } else {
      fifth = "✔";
    }
    if (firstNameErr || lastNameErr || mobileErr || emailErr || passwordErr) {
      setInput({
        ...input,
        firstNameErr,
        lastNameErr,
        mobileErr,
        emailErr,
        passwordErr,
        first,
        second,
        third,
        fourt,
        fifth,
      });
    } else {
      setInput({
        ...input,
        firstNameErr,
        lastNameErr,
        mobileErr,
        emailErr,
        passwordErr,
        first,
        second,
        third,
        fourt,
        fifth,
      });
    }
  };
  return (
    <>
      <form className="form-control container  mt-2" onSubmit={handelform}>
        <div>
          <input
            className="input mt-2 w-75 p-3"
            type="text"
            placeholder="Enter Your First Name"
            name="firstName"
            onChange={changeInput}
            value={input.firstName}
          />
          <span>{input.first}</span>
        </div>
        <p className="text-danger">{input.firstNameErr}</p>
        <div>
          <input
            className="input mt-2 w-75 p-3"
            type="text"
            placeholder="Enter Your Last Name"
            name="lastName"
            onChange={changeInput}
            value={input.lastName}
          />
          <span>{input.second}</span>
        </div>
        <p className="text-danger">{input.lastNameErr}</p>
        <div>
          <input
            className="input mt-2 w-75 p-3"
            type="text"
            placeholder="Enter Mobile Number"
            name="mobile"
            onChange={changeInput}
            value={input.mobile}
          />
          <span>{input.third}</span>
        </div>
        <p className="text-danger">{input.mobileErr}</p>
        <div>
          <input
            className="input mt-2 w-75 p-3"
            type="email"
            placeholder="Enter Your Email"
            name="email"
            onChange={changeInput}
            value={input.email}
          />
          <span>{input.fourt}</span>
        </div>
        <p className="text-danger">{input.emailErr}</p>
        <div>
          <input
            className="input mt-2 w-75 p-3"
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={changeInput}
            value={input.password}
          />
          <span>{input.fifth}</span>
        </div>
        <p className="text-danger">{input.passwordErr}</p>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </>
  );
};

export default Form;
