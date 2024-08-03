import React from "react"



const Modal = ({isVisible, errorMessage = null}: {isVisible: boolean, errorMessage?: string | null}) => {
  if (isVisible) {
    return (
      <div className="absolute bg-[#0007] w-full h-full flex justify-center items-center">
        <div className="bg-white text-green-600 w-11/12 text-center font-bold text-3xl p-8">
          {/* <h1>The Form Has Been  Submitted Successfully </h1> */}
          <h1 style={{color: errorMessage ? "red" : "green"}}>{errorMessage != null ? errorMessage : "The Form Has Been  Submitted Successfully"}</h1>
        </div>
      </div>
    );
  } else {
    return(<></>)
  }
  
};




export default Modal