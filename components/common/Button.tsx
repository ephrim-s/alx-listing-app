import React from 'react';
import type { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className = '', disabled = false }) => (
  <button
    type={type}
    onClick={onClick}
    className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
    disabled={disabled}
  >
    {label}
  </button>
);

export default Button;
