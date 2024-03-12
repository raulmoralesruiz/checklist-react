import React, { useState, useEffect } from 'react';
import InputComponent from './components/Input';
import ButtonComponent from './components/Button';
import './App.css'

const App: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState(''); // Estado para el nuevo mensaje

  useEffect(() => {
    const messagesFromLocalStorage = localStorage.getItem('messages');
    if (messagesFromLocalStorage) {
      setMessages(JSON.parse(messagesFromLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  const handleAddMessage = () => {
    setMessages([...messages, newMessage]);
    setNewMessage(''); // Limpia el input después de añadir el mensaje
  };

  const handleDeleteMessage = (index: number) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value); 
  };

  return (
    <div className='app'>
      <InputComponent value={newMessage} onChange={handleChange} /> 
      <ButtonComponent message={newMessage} onAddMessage={handleAddMessage} /> 
      <ul>
        {messages.map((message, index) => (
          <li key={message}>
            {message}
            <button onClick={() => handleDeleteMessage(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
