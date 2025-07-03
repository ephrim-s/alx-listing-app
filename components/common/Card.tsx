import React from 'react';
import { CardProps } from '../../interfaces';
import Image from 'next/image';

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price, location, className = '', children }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
    <Image src={imageUrl} alt={title} width={400} height={250} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      {location && <p className="text-sm text-gray-500">{location}</p>}
      {price && <p className="text-blue-600 font-bold">{price}</p>}
      {children}
    </div>
  </div>
);

export default Card;
