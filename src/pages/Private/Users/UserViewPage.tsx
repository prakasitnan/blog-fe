import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCookie } from "../../../utils/CookieUtils";
import { NavLink } from "react-router-dom";
import axiosInstance from "../../../axios/axiosInstance";

export default function UserViewPage() {
  const [data, setData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, [currentPage, perPage]);

  const fetchData = async () => {
    // console.log(token);
    try {
      const response = await axiosInstance.get("/api/v1/users/getDataTable");
      console.log(response.data);

      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto my-4">
        <h1 className="text-2xl font-bold mb-4">UserData Table</h1>
        <div>
          <table className="order-collapse border border-slate-500 min-w-full">
            <thead>
              <tr>
                <th className="border border-slate-600">No.</th>
                <th className="border border-slate-600">Username</th>
                <th className="border border-slate-600">Name</th>
                <th className="border border-slate-600">Email</th>
                <th className="border border-slate-600">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="border border-slate-700 ">{index + 1}</td>
                  <td className="border border-slate-700 ">{item.username}</td>
                  <td className="border border-slate-700 ">{item.name}</td>
                  <td className="border border-slate-700 ">{item.email}</td>
                  <td className="border border-slate-700 grid justify-items-center">
                    <NavLink to={`/userManagePage/${item.userId}`}>
                      <button className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4  ml-2 rounded ">
                        Edit
                      </button>
                    </NavLink>
                    <button className="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4  ml-2 rounded ">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="my-4">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 0}
            >
              Previous Page
            </button>
            <span className="mx-2">Page {currentPage + 1}</span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={data.length < perPage}
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
