// src/components/Button.tsx
import React from 'react';
import '../../styles/_button.scss';

interface ButtonProps {
  label: string;           // The text to display on the button
  onClick: () => void;    // Function to call on button click
  disabled?: boolean;      // Optional prop to disable the button
  type?: 'button' | 'submit' | 'reset'; // Button type, default is 'button'
  className?: string;      // Optional additional classes for styling
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  type = 'button',
  className = ''
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
