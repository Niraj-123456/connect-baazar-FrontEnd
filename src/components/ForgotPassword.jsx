import React from "react";

const ForgotPassword = () => {
  return (
    <div className="fp_container">
      <div className="fp_main">
        <h1>Forgot Password</h1>
        <form>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <button type="submit">Send Verification OTP</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
