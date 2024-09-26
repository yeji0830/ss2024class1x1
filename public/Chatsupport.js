import React, { useEffect, useState } from 'react';

const ChatSupport = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const ws = new WebSocket('ws://example.com/chat');

    ws.onmessage = (event) => {
      setMessages(prev => [...prev, event.data]);
    };

    return () => ws.close();
  }, []);

  const sendMessage = () => {
    // WebSocket을 통해 메시지 전송
  };

  return (
    <div>
      <h2>실시간 채팅</h2>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatSupport;
