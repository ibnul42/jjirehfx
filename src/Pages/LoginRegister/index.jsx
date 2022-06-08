import React, { useEffect, useState } from "react";
import {countries} from "countries-list"

function LoginRegister({login=true, register=false}) {
  const [loginState, setLoginState] = useState(login);
  const [registerState, setRegisterState] = useState(register);
  const [dropDownToggle, setDropDownToggle] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    countryName: '',
    phoneNumber: "",
    password: '',
    confirmPassword: '',
  })
  const { firstName, lastName, username, email, countryName, phoneNumber, password, confirmPassword} = formData;
  const [checkPass, setCheckPass] = useState(false);

  const allCountries = Object.entries(countries)
  useEffect(() => {
    document.getElementById("particles-js").style.display = "none";
  }, []);

  const currentState = (text) => {
    if(text === "register") {
      setRegisterState(true);
      setLoginState(false);
      setFormData({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        countryName: '',
        phoneNumber: "",
        password: '',
        confirmPassword: '',
      })
    } else if(text === "login") {
      setLoginState(true);
      setRegisterState(false);
      setFormData({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        countryName: '',
        phoneNumber: "",
        password: '',
        confirmPassword: '',
      })
    }
  }
  const onChange = (e) => {
    if(e.target.name === "confirmPassword"){
      setCheckPass(true);
    }
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }
  const changeCountry = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      countryName: data.name,
      phoneNumber: data.phone
    }))
  }
  const onRegister = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  const onLogin = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className="my-5">
      <div className="max-w-7xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="col-span-1">
          <div className="flex w-full items-start gap-4 text-3xl lg:text-5xl font-extrabold my-3">
            <p 
              id="register"
              className={`cursor-pointer ${registerState ? "text-gray-700" : "text-gray-400"}`}
              onClick={() => currentState('register')}
            >Register</p>
            <p 
              id="login"
              className={`cursor-pointer ${loginState ? "text-gray-700" : "text-gray-400"}`}
              onClick={() => currentState('login')}
              >Log In</p>
          </div>
          <div className="">
            {registerState && (
              <form onSubmit={onRegister}>
                <div className="mb-6 w-full sm:w-9/12 md:w-8/12 grid grid-cols-2 gap-2">                  
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={onChange}
                    placeholder="First Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block col-span-1 p-2.5"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={onChange}
                    placeholder="Last Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block col-span-1 p-2.5"
                    required
                  />
                </div>
                <div className="mb-6 w-full sm:w-9/12 md:w-8/12">
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={onChange}
                    placeholder="Username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="mb-6 w-full sm:w-9/12 md:w-8/12 grid grid-cols-2 gap-2">                  
                  <div className="">
                    <button className="w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex justify-between items-center" type="button" onClick={() => setDropDownToggle(!dropDownToggle)}>{countryName ? countryName : "Select Country"} <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

                    <div className="relative">
                      <div className={`absolute h-48 overflow-y-auto bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4 ${!dropDownToggle && 'hidden'}`} id="dropdown">
                        <ul className="py-1">
                          <li onClick={() => setDropDownToggle(false)}>
                            {allCountries.map((country, index) => (
                              <p key={index} className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 cursor-pointer" onClick={() => changeCountry(country[1])}>{country[1].name}</p>
                            ))}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={onChange}
                    placeholder="Phone Number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block col-span-1 p-2.5"
                    required
                  />
                </div>
                <div className="mb-6 w-full sm:w-9/12 md:w-8/12">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Email Address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="mb-6 w-full sm:w-9/12 md:w-8/12">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="mb-6 w-full sm:w-9/12 md:w-8/12">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={onChange}
                    placeholder="Confirm Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                  {checkPass && password !== confirmPassword && <p className="text-base text-red-500 mt-2">Paswword doesn't match!</p>}
                </div>
                <div className="mb-6 w-full sm:w-9/12 md:w-8/12 flex justify-center">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Register
                  </button>
                </div>
              </form>
            )}
            {loginState && (
              <form onSubmit={onLogin}>
                <div className="mb-6 w-full sm:w-9/12 md:w-8/12">
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={onChange}
                    placeholder="Username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="mb-6 w-full sm:w-9/12 md:w-8/12">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="mb-6 w-full sm:w-9/12 md:w-8/12 flex justify-center">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Login
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="col-span-1 w-80 h-72 md:w-[380px] md:h-[320px] lg:w-[450px] lg:h-[375px]">
          <div className="flex justify-center items-center">
            <img
              src="/assets/email_phone.png"
              className="h-full w-full"
              alt=""
            />
          </div>
          <div className="mt-5 md:mt-8 flex flex-col lg:flex-row mx-0 md:ml-10 lg:ml-20 xl:ml-36">
            <p className="ml-1 md:ml-0 mr-2">Need any help?</p>
            <div className="mx-1 uppercase text-[#0C77FF] cursor-pointer">
              Contact Us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
