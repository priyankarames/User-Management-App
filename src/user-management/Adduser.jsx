import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Adduser.css';

export default function Adduser({ addUser, users, updateUser }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEdit = Boolean(id);
  const existingUser = users?.find(u => u.id === Number(id)) || { name: "", email: "", phone: "" };

  const [form, setForm] = useState(existingUser);

  useEffect(() => {
    if (isEdit && existingUser) setForm(existingUser);
  }, [existingUser, isEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) updateUser(Number(id), form);
    else addUser(form);
    navigate("/users");
  };

  return (
    <div className="containerStyle">
      <h1 className="usersDataStyle">User Management App</h1>
      <h1>{isEdit ? "Edit User" : "Add User"}</h1>
      <form onSubmit={handleSubmit} className="formStyle">
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} className="inputStyle" required />

        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} className="inputStyle" required />

        <label>Phone</label>
        <input name="phone" value={form.phone} onChange={handleChange} className="inputStyle" required />

        <button type="submit" className="btnStyleBlue">Submit</button>
      </form>
    </div>
  );
}
