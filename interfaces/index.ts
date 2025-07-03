// ButtonProps: Props for the reusable Button component
export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

// CardProps: Props for the reusable Card component
export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price?: string | number;
  location?: string;
  onClick?: () => void;
  className?: string;
}
