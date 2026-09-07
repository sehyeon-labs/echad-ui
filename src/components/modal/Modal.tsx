import React, { type ReactNode } from 'react';
import styles from './Modal.module.scss';
import Button from '@/components/button/Button';
import closeImg from '@/assets/icons/close-icon.png';
import closeImgDark from '@/assets/icons/close-icon-dark.png';
import { useDarkMode } from '@/hooks/dark-mode/useDarkMode';

interface ModalProps {
  isOpen: boolean,
  isBackgroundClick?: boolean
  isDouble?: boolean
  btn?: string;
  onConfirm?: () => void;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  isBackgroundClick = true,
  isDouble = false,
  btn = '확인',
  onClose, 
  onConfirm, 
  children
}) => {
  if (!isOpen) return null;

  const isDarkMode = useDarkMode()

  const handleBackgroundClick = (e: any) => {
    if (e.target.classList.contains(styles.bg) && isBackgroundClick) {
      onClose();
    }
  }

  return (
    <div className={styles.bg} onClick={handleBackgroundClick}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
      <div className={styles.closeBtn}><img src={isDarkMode ? closeImgDark : closeImg} alt='close-btn-img' onClick={onClose} /></div>
        <div className={styles.content}>{children}</div>

        <div className={styles.btn}>
          {isDouble && <Button variant='cancel' onClick={onClose}>취소</Button>}
          <Button variant='ok' onClick={onConfirm}>{btn}</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;