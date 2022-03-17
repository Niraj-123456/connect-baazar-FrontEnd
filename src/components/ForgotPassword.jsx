import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";

const ForgotPassword = () => {
  const [phone, setPhone] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  const handleChange = () => {
    setPhone(phone);
  };
  return (
    <div className="fp_container">
      <div className="fp_main">
        <h1>Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="password">Password</label>
          <PhoneInput
            error
            country={"np"}
            helperText="Incorrect Number Format"
            placeholder="Enter Phone Number"
            specialLabel=""
            name="phone"
            value={phone}
            onChange={handleChange}
            inputStyle={{
              width: 466,
              height: 46,
            }}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
            }}
          />
          <button type="submit">Send Verification OTP</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
