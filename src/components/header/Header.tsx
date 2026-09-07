import React from 'react';
import styles from './Header.module.scss';
import logo from '@/assets/logo-text.png';
import logoDark from '@/assets/logo-text-dark.png';
import Img from '@/components/img/Img';
import Button from '@/components/button/Button';
import Modal from '@/components/modal/Modal';
import { ModalContent } from '@/components/modal/ModalContent';
import { useDarkMode } from '@/hooks/dark-mode/useDarkMode';
import { useNavigate, useLocation } from 'react-router-dom';
import { useModal } from '@/hooks/modal/useModal';
import { useAuth } from '@/context/auth/AuthContext';
import { PATH } from '@/utils/path';
import { MENU_LIST } from './header.constants';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDarkMode = useDarkMode();
  const { user, logout } = useAuth();

  const handleConfirmLogout = () => {
    logout();
  };

  const { isOpen, closeModal, openModal, handleConfirm } = useModal({
    onConfirmCallback: handleConfirmLogout,
  });

  return (
    <>
      <Modal
        isOpen={isOpen}
        isDouble={true}
        btn="로그아웃"
        onClose={closeModal}
        onConfirm={handleConfirm}
      >
        <ModalContent title="로그아웃" message="정말 로그아웃 하시겠습니까?" />
      </Modal>

      <div className={styles.header}>
        <Img
          src={isDarkMode ? logoDark : logo}
          alt="logo"
          path="DASHBOARD"
          cursor={true}
          className={styles.logo}
        />

        <div className={styles.divider}>
          {MENU_LIST.map((menu) => (
            <div
              key={menu.key}
              className={`${
                location.pathname === menu.path ? styles.active : ''
              } ${styles.divider_item}`}
              onClick={() => navigate(menu.path)}
            >
              {menu.label}
            </div>
          ))}
        </div>

        <div className={styles.right_menu}>
          <div className={styles.user_info}>
            {user && `${user.groomName} ♥︎ ${user.brideName}`}
          </div>

          <div className={styles.btn}>
            {user ? (
              <Button variant="black" size="s" onClick={openModal}>
                LOGOUT
              </Button>
            ) : (
              <Button
                variant="black"
                size="s"
                onClick={() => navigate(PATH.LOGIN)}
              >
                LOGIN
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;