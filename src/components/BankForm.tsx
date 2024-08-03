"use client";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";

const BankForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formInputs, setFormInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    slaaryRange: "",
  });

  function handleFormSubmit(event: any) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = formInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("the age is not allowed!");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone Number Format Is Incorrect!");
    }
    setShowModal(true);
  }

  const btnIsDs =
    formInputs.name == "" ||
    formInputs.age == "" ||
    formInputs.phoneNumber == "" ||
    formInputs.slaaryRange == "";

  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }

  return (
    <div
      onClick={handleDivClick}
      className="flex justify-center items-center h-screen bg-[#0d002c] text-white">
      <form className=" w-1/3 p-8 bg-[#2c0099] rounded-2xl ">
        <h1 className=" text-3xl block text-center font-semibold ">
          Requesting a Loan
        </h1>
        <hr className="mt-3" />
        <div className="mt-3">
          <label className=" block text-base mb-2  ">Name:</label>
          <input
            value={formInputs.name}
            onChange={(event) => {
              setFormInputs({ ...formInputs, name: event.target.value });
            }}
            type="text"
            name="text"
            id="text"
            className="border w-full text-base px-1 py-1 text-black"
          />
        </div>
        <div className="mt-3">
          <label className=" block text-base mb-2  ">Phone Number:</label>
          <input
            value={formInputs.phoneNumber}
            onChange={(event) => {
              setFormInputs({ ...formInputs, phoneNumber: event.target.value });
            }}
            type="text"
            name="Phone Number"
            id="phone Number"
            className="border w-full text-base px-1 py-1 text-black"
          />
        </div>
        <div className="mt-3">
          <label className=" block text-base mb-2  ">Age:</label>
          <input
            value={formInputs.age}
            onChange={(event) => {
              setFormInputs({ ...formInputs, age: event.target.value });
            }}
            type="text"
            name="Age"
            id="age"
            className="border w-full text-base px-1 py-1 text-black"
          />
        </div>
        <div className=" mt-3">
          <label className="pr-3">Are you an employee?</label>
          <input
            type="checkbox"
            checked={formInputs.isEmployee}
            onChange={(event) => {
              setFormInputs({
                ...formInputs,
                isEmployee: event.target.checked,
              });
            }}
          />
        </div>
        <div className="mt-3">
          <label className=" block">salary</label>
          <select
            className="border w-full text-base px-1 py-1 text-black"
            value={formInputs.slaaryRange}
            onChange={(event) => {
              setFormInputs({ ...formInputs, slaaryRange: event.target.value });
            }}>
            <option>less than 500$</option>
            <option>between 500$ and 2000$</option>
            <option>above 2000$</option>
          </select>
        </div>
        <button
          onClick={handleFormSubmit}
          disabled={btnIsDs}
          className={`${
            btnIsDs ? "bg-gray-500" : "bg-[#3DC2EC]"
          } w-20 relative left-60 mt-6  p-2 rounded-md`}>
          Submit
        </button>
      </form>
      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
};

export default BankForm;
