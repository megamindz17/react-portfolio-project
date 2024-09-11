import React, { useState } from 'react';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      setTimeout(() => {
        setMessages([...messages, { text: input, sender: 'user' }, { text: 'This is a bot reply!', sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className={`fixed bottom-5 right-5 transition-all ${isOpen ? 'w-80 h-80' : 'w-16 h-16'} bg-white  border border-gray-300 rounded-lg shadow-lg`}>
      {isOpen ? (
        <div className="flex flex-col h-full">
          <div className="flex-grow overflow-y-auto p-2 border-b border-gray-300">
            <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 p-1 bg-red-500 w-[35px] h-[35px] text-white rounded-full">
              ×
            </button>
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 mb-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>
                <span>{msg.text}</span>
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-gray-300 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-l-md"
              placeholder="Type a message"
            />
            <button onClick={handleSend} className="p-2 bg-blue-500 text-white rounded-r-md">Send</button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="w-full h-full flex items-center justify-center rounded-full  bg-blue-500 text-white">
          <span className="text-sm">Chat</span>
        </button>
      )}
    </div>
  );
};

export default ChatBox;
