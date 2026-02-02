import styles from './Header.module.scss';
import logo from '@/assets/logo-text.png';
import logoDark from '@/assets/logo-text-dark.png';
import Img from '@/components/img/Img';
import Button from '@/components/button/Button';
import Modal from '@/components/modal/Modal';
import { ModalContent } from '@/components/modal/ModalContent';
import { useDarkMode } from '@/hooks/dark-mode/useDarkMode';
import { useNavigate } from 'react-router-dom';
import { useModal } from '@/hooks/modal/useModal';
import { useAuth } from '@/context/auth/AuthContext';
import { PATH } from '@/utils/path';

const Header = () => {
  const navigate = useNavigate();
  const isDarkMode = useDarkMode();
  const { user, logout } = useAuth();
  
  const handleLogout = async () => {
    openModal();
  };
  
  const handleConfirmLogout = () => {
    logout();
  }
  
  const {isOpen, closeModal, openModal, handleConfirm} = useModal({onConfirmCallback: handleConfirmLogout});

  return (
    <>
      <Modal
        isOpen={isOpen}
        isDouble={true}
        btn='로그아웃'
        onClose={closeModal}
        onConfirm={handleConfirm}
      >
        <ModalContent title='로그아웃' message='정말 로그아웃 하시겠습니까?'/>
      </Modal>

      <div className={styles.header}>
        <Img
          src={isDarkMode ? logoDark : logo}
          alt='logo'
          path='DASHBOARD'
          cursor={true}
          className={styles.logo}
        />

        <div className={styles.divider}>
          <div className={styles.divider_item} onClick={() => navigate(PATH.DASHBOARD)}>제작</div>
          <div className={styles.divider_item} onClick={() => navigate(PATH.DASHBOARD)}>방명록</div>
          <div className={styles.divider_item} onClick={() => navigate(PATH.DASHBOARD)}>갤러리</div>
          <div className={styles.divider_item} onClick={() => navigate(PATH.DASHBOARD)}>공지사항</div>
          <div className={styles.divider_item} onClick={() => navigate(PATH.DASHBOARD)}>설정</div>
        </div>

        <div className={styles.right_menu}>

          <div className={styles.user_info} >
            {user && `${user.groomName} ♥︎ ${user.brideName}`}
          </div>

          <div className={styles.btn}>
            {user ? (
              <Button variant='black' size='s' onClick={handleLogout}>LOGOUT</Button>
            ) : (
              <Button variant='black' size='s' onClick={() => navigate(PATH.LOGIN)}>LOGIN</Button>
            )}
          </div>
        </div>
      </div>

    </>
  );
};

export default Header;