import React, { useState } from "react";

const PayForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    inkindSupport: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Perform any necessary actions with the form data (e.g., validation, sending data to the server)
    console.log(formData); // Log form data to the console

    // You can add further logic here, such as sending the form data to the server via fetch or axios
  };

  return (
    <div className="max-w-[400px] mt-8 p-4 items-center">
      <form className="my-2" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email *
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="address"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Current Address *
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="inkindSupport"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Please mention the type of inkind support *
          </label>
          <textarea
            name="inkindSupport"
            id="inkindSupport"
            value={formData.inkindSupport}
            onChange={handleChange}
            className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div className="my-8">
          <h1 className="text-gray-900">
            For cash support, please deposit in our bank account
          </h1>
          <ul className="list-disc">
            <li>Account Name</li>
            <li>Account Number</li>
            <li>Bank Name: Nepal Investment Bank Ltd</li>
            <li>Bank Address: Durbar Marg, Kathmandu, Nepal</li>
            <li>SWIFT CODE:</li>
          </ul>
        </div>
        <div>
          <label
            htmlFor="file_input"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Upload slip deposit here
          </label>
          <input
            className="bg-slate-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="file_input"
            type="file"
          />
        </div>
        <div className="my-4">
          <h1>Mandatory fields*</h1>
        </div>
        <button
          type="submit"
          className="mt-2 w-full focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default PayForm;
