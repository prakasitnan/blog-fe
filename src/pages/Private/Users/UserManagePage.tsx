import axios from "axios";
import React, { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { Navigate, redirect, useParams } from "react-router-dom";
import { getCookie } from "../../../utils/CookieUtils";
import axiosInstance from "../../../axios/axiosInstance";

export default function UserManagePage() {
  let { id } = useParams();
  const token = getCookie("authToken");
  const [formData, setFormData] = useState({
    userId: 0,
    username: "",
    password: "",
    names: "",
    email: "",
    statusId: "1", // Default value for userRole
    userRoleId: "1", // Default value for userStatus
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      // Send a POST request to the API to save user data
      const response = await axiosInstance.post("/users/save", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        // Handle success (e.g., show a success message)
        console.log("User data saved successfully.");
      } else {
        // Handle error (e.g., show an error message)
        console.error("Error saving user data.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onBack = () => {
    return redirect("/userViewPage");
  };

  useEffect(() => {
    axiosInstance
      .get(`/api/v1/users/getById?userId=${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        setFormData({
          ...formData,
          userId: data.userId,
          username: data.username,
          names: data.name,
          email: data.email,
          userRoleId: data.userRole,
          statusId: data.statusId,
          // Set other fields as needed
        });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <>
      <h1>User Manager</h1>
      <form className="w-full max-2-lg" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-username"
            >
              Username
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="password"
              name="password"
              placeholder="******************"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-name"
            >
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-name"
              name="names"
              type="text"
              value={formData.names}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-role"
            >
              User Role
            </label>

            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-role"
              name="userRoleId"
              value={formData.userRoleId}
              onChange={handleInputChange}
            >
              <option value={999}>Admin</option>
              <option value={1}>Writer</option>
              <option value={2}>Modulator</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-status"
            >
              User Status
            </label>

            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-status"
              name="statusId"
              value={formData.statusId}
              onChange={handleInputChange}
            >
              <option value={1}>Active</option>
              <option value={-1}>InActive</option>
            </select>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
            <button
              className="shadow bg-red-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4  ml-2 rounded"
              type="button"
              onClick={onBack}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
