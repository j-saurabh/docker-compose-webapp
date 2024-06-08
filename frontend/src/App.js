import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>Message from Backend</h1>
      <h3>This is the message coming from backend, if you are seeing this message, then application is running fine</h3>
      <p>{message}</p>
    </div>
  );
}

export default App;