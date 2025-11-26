import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import UserList from "./user-management/Userlist";
import Adduser from "./user-management/Adduser";


function App() {
  const [users, setUsers] = useState([]);

  // Fetch users from API
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  // Add user locally
  const addUser = (user) => setUsers(prev => [...prev, { ...user, id: Date.now() }]);

  // Update user locally
  const updateUser = (id, updatedUser) => setUsers(prev => prev.map(u => u.id === id ? { ...u, ...updatedUser } : u));

  // Delete user locally
  const deleteUser = (id) => setUsers(prev => prev.filter(u => u.id !== id));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<UserList users={users} deleteUser={deleteUser} />} />
        <Route path="/add-user" element={<Adduser addUser={addUser} />} />
        <Route path="/edit-user/:id" element={<Adduser users={users} updateUser={updateUser} />} />
        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
