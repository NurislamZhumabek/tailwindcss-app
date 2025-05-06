import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([

  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const addUser = () => {
    if (!name || !age) {
      alert("Please enter both name and age");
      return;
    }

    const newUser = {
      id: users.length + 1,
      name,
      age: parseInt(age)
    };

    setUsers([...users, newUser]);
    setName('');
    setAge('');
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>

      {users.map(user => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0"
          }}
        >
          <strong>id: {user.id}</strong>
          <h2>Name: {user.name}</h2>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
