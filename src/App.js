import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user records from the API
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data.users)});
      
  }, []);

  return (
    <div>
      <h1 style={{textAlign: "center"}}>Dummy Data</h1>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <img src={user.image} alt={user.username} width="50" />
              </td>
              <td>{user.firstName}</td>
              <td>{user.lastnName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
