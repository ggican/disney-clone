export interface IButtonProps {
  block?: boolean;
  color?: "primary" | "secondary";
  onClick?: any;
  children?: React.ReactNode; // Changed from boolean to string for content
}
