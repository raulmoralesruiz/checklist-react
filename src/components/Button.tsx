import React from 'react';
import './Button.css'

interface ButtonProps {
  message: string;
  onAddMessage: (message: string) => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ message, onAddMessage }) => {
  return (
    <button onClick={() => onAddMessage(message)}>Agregar</button>
  );
};

export default ButtonComponent;
