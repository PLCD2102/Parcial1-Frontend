import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://3.83.52.7:5000/register'); // Replace with your actual URL
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lista de Usuarios</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.nombre} {/* Assuming "nombre" is the property for user name */}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
