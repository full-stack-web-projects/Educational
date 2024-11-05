import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) setErrors({ ...errors, email: "" });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) setErrors({ ...errors, password: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission or API call
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex flex-col gap-10 border border-input rounded-xl p-8">
        <p className="font-Dm text-4xl">Login</p>
        <form
          className="flex flex-col gap-6 w-[250px] md:w-[500px]"
          onSubmit={handleSubmit}
        >
          <div>
            <Input
              type="email"
              className="border-slate-600"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              className="border-slate-600 pr-10"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-2 flex items-center text-gray-500"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          <Button type="submit">Login</Button>
        </form>
        <div className="flex flex-col gap-3">
          <Link>
            <p className="text-slate-500 text-center hover:text-primary">
              Forgot Password?
            </p>
          </Link>
          <Link to="/register">
            <p className="text-slate-500 text-center hover:text-primary">
              Create an Account
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
