import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

export default function RealTimeAutomation() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    socket.on('response', data => setResponse(data.data));
  }, []);

  return (
    <div style={{ marginTop: 20 }}>
      <input
        type="text"
        placeholder="Send real-time message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={() => socket.send(message)}>Send</button>
      <p>Response: {response}</p>
    </div>
  );
}