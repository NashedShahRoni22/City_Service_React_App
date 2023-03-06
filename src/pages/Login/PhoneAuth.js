import React, { useContext, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { AppContext } from "../../appContext/ContextProvider";
import OtpInput from "otp-input-react-18";
import { useNavigate } from "react-router-dom";

const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [OTP, setOTP] = useState("");
  const [err, setErr] = useState("");
  const [flag, setFlag] = useState(true);
  const [confirmObj, setConfrimObj] = useState("");

  const { setUpRecaptcha } = useContext(AppContext);
  const navigate = useNavigate();

  const getOTP = async (e) => {
    e.preventDefault();
    setErr("");
    if (phoneNumber === "" || phoneNumber === undefined)
      return setErr("Please enter a valid Phone Number");
    try {
      const response = await setUpRecaptcha(phoneNumber);
      setConfrimObj(response);
      setFlag(false);
    } catch (er) {
      setErr(er.message);
    }
  };

  const verifyOTP = async (e) => {
    e.preventDefault();
    console.log(OTP);
    if (OTP === "" || OTP === null) return;
    try {
      setErr("");
      await confirmObj.confirm(OTP);
      navigate("/");
    } catch (er) {
      setErr(er.message);
    }
  };
  return (
    <>
      {flag ? (
        <form
          onSubmit={getOTP}
          className="rounded-lg my-20 py-20 container mx-auto w-96 p-8 border"
        >
          <PhoneInput
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={setPhoneNumber}
            defaultCountry="BD"
          />
          <button
            className="my-5 px-4 py-2 bg-violet-600 border rounded-lg font-semibold text-white hover:bg-transparent hover:text-violet-600"
            type="submit"
          >
            Send OTP
          </button>
          {err && <p className="text-red-500">{err}</p>}
          <div id="recaptcha-container" />
        </form>
      ) : (
        <form
          onSubmit={verifyOTP}
          className="bg-violet-600 flex flex-col items-center gap-4 rounded-lg my-20 py-20 container mx-auto w-96 p-8 border"
        >
          <OtpInput
            value={OTP}
            onChange={setOTP}
            numInputs={6}
            separator={<span className="text-white">=</span>}
          />
          <button
            className="my-5 px-4 py-2 border rounded-lg font-semibold text-white hover:bg-white hover:text-violet-600"
            type="submit"
          >
            Verify OTP
          </button>
          {err && <p className="text-red-500">{err}</p>}
          <div id="recaptcha-container" />
        </form>
      )}
    </>
  );
};

export default PhoneAuth;
