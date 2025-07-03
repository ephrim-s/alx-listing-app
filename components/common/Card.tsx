import React from 'react';
import type { CardProps } from '../../interfaces';
import Button from './Button';

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price, location, onClick, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      {location && <p className="text-sm text-gray-500 mb-1">{location}</p>}
      {price && <p className="text-base font-bold mb-2">{price}</p>}
      {onClick && <Button label="View Details" onClick={onClick} />}
    </div>
  </div>
);

export default Card;
