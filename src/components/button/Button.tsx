import React, { type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

type ButtonVariant = 'ok' | 'cancel' | 'white' | 'black' | 'danger';
type ButtonSize = 's' | 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  width?: string | number;
  height?: string | number;
  fontSize?: string | number;
  active?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'ok',
  size = 'm',
  width,
  height,
  fontSize,
  active = false,
  children,
  ...rest
}) => {
  return (
    <button 
      className={`
        ${styles.button} 
        ${styles[variant]} 
        ${styles[size]} 
        ${active ? styles.active : ''}`} 
        style={{ width, height, fontSize }} 
        {...rest}>

      {children}
    </button>
  );
};

export default Button;