import React from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  valueRef?: React.RefObject<HTMLInputElement | null>;
  valueError?: string;
}
const Input: React.FC<InputProps> = ({
  type,
  value,
  handleChange,
  handleKeyDown,
  placeholder,
  valueRef,
  valueError
}) => {
  return (
    <>
      <input 
        type={type} 
        value={value}
        onChange={handleChange} 
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={`${styles.input} ${value && styles.verifyInput}`}
        ref={valueRef}
        />
      {valueError && <div className={styles.errorMessage}>{valueError}</div>}
    </>
  );
};

export default Input;