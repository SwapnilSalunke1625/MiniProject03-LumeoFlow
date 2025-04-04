import React from "react";
import { useState } from "react";

export default function AdminSignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "",
    userType: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-screen bg-gray-100">
        <div className="bg-gray-200 w-[430px] h-[570px] rounded-xl shadow-lg ">
          <h2 className="text-4xl font-bold text-center my-4">Sign Up</h2>
          <form className="flex justify-center items-center flex-col gap-3">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg "
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg"
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg"
              onChange={handleChange}
              required
            />

            <div className=" flex gap-2 ">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="input-box h-[40px] w-[100px] bg-white rounded-l-xl rounded-r-md outline-none px-4 text-lg"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                className="input-box h-[40px] w-[100px] bg-white rounded-md outline-none px-4 text-lg"
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                className="input-box h-[40px] w-[100px] bg-white rounded-r-xl rounded-l-md  outline-none px-4 text-lg"
                onChange={handleChange}
                required
              />
            </div>

            <select
              name="userType"
              className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg"
              onChange={handleChange}
              required
            >
              <option value="">Select User Type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Industrial">Industrial</option>
            </select>

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg"
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="input-box w-[320px] h-[40px] bg-white rounded-xl outline-none px-4 text-lg"
              onChange={handleChange}
              required
            />
            
            <p className="text-center text-gray-600 font-semibold">
              Preferred Notification:
              <label className="ml-2">
                <input type="checkbox" className="mr-1" /> WhatsApp
              </label>
              <label className="ml-2">
                <input type="checkbox" className="mr-1" /> Email
              </label>
            </p>
            <button
              type="button"
              className="w-[150px] py-2 px-4 font-bold outline-none  rounded-lg "
            >
              Sign Up
            </button>
            <p className="text-center text-gray-600 ">
              Already have an account?{" "}
              <a href="/login" className="text-blue-600 hover:underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
