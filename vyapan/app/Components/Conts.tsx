"use client"

import { useState } from 'react';

const roles = [
  { id: 1, name: 'Role 1' },
  { id: 2, name: 'Role 2' },
  { id: 3, name: 'Role 3' },
];

const ContactForm = () => {
  const [contact, setContact] = useState({
    contactId: '',
    roleId: '',
    firstName: '',
    middleName: '',
    lastName: '',
    contactNo1: '',
    contactNo2: '',
    email: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setContact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 border-s-violet-400">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <div className="mb-4">
        <label htmlFor="contactId" className="block mb-2 font-medium">
          Contact ID
        </label>
        <input
          type="text"
          id="contactId"
          name="contactId"
          value={contact.contactId}
          onChange={handleChange}
          className="border rounded-md p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="roleId" className="block mb-2 font-medium">
          Role ID
        </label>
        <select
          id="roleId"
          name="roleId"
          value={contact.roleId}
          onChange={handleChange}
          className="border rounded-md p-2 w-full"
        >
          <option value="">Select Role</option>
          {roles.map((role) => (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="firstName" className="block mb-2 font-medium">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={contact.firstName}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="middleName" className="block mb-2 font-medium">
            Middle Name
          </label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={contact.middleName}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block mb-2 font-medium">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
          className="border rounded-md p-2 w-full"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="contactNo1" className="block mb-2 font-medium">
            Contact No. 1
          </label>
          <input
            type="text"
            id="contactNo1"
            name="contactNo1"
            value={contact.contactNo1}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="contactNo2" className="block mb-2 font-medium">
            Contact No. 2
          </label>
          <input
            type="text"
            id="contactNo2"
            name="contactNo2"
            value={contact.contactNo2}
            onChange={handleChange}
            className="border rounded-md p-2 w-full"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
          className="border rounded-md p-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
