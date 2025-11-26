import React from "react";
import { Link } from "react-router-dom";
import './Userlist.css'

export default function UserList({ users, deleteUser }) {
  return (
    <div>
      <center><h1 className="usersDataStyle">User Management App</h1></center>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
        <h2>Users List</h2>
        <Link to="/add-user" className="btnStyleGreen">Add User</Link>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f2f2f2" }}>
            <th className="thTdStyle">Name</th>
            <th className="thTdStyle">Email</th>
            <th className="thTdStyle">Phone</th>
            <th className="thTdStyle">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="thTdStyle">{user.name}</td>
              <td className="thTdStyle">{user.email}</td>
              <td className="thTdStyle">{user.phone}</td>
              <td className="thTdStyle">
                <Link to={`/edit-user/${user.id}`} className="btnStyleBlue">Edit</Link>
                <button onClick={() => deleteUser(user.id)} className="btnStyleRed">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
