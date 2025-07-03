// TypeScript interfaces for reusable components

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price?: string;
  location?: string;
  className?: string;
  children?: React.ReactNode;
}
