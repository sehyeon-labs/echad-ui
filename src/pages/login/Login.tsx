import styles from './Login.module.scss';
import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/utils/path';
import { useAuth } from '@/context/auth/AuthContext';
import { loginApi } from '@/services/api';
import { useModal } from '@/hooks/modal/useModal';
import { useDarkMode } from '@/hooks/dark-mode/useDarkMode';
import { ModalContent } from '@/components/modal/ModalContent';
import Button from '@/components/button/Button';
import Input from '@/components/input/Input';
import Modal from '@/components/modal/Modal';
import logoImg from '@/assets/logo-text.png';
import logoImgDark from '@/assets/logo-text-dark.png';

const Login: React.FC = () => {
  const isDarkMode = useDarkMode()
  
  const { login } = useAuth();
  
  const navigate = useNavigate();

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [idError, setIdError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const [title, setTitle] = React.useState('');
  const [message, setMessage] = React.useState('');

  const [success, setSuccess] = React.useState(false);

  // Redirect to dashboard if already logged in
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) navigate(PATH.DASHBOARD);
    console.log('login: ' + isLoggedIn)
  }, [isLoggedIn])

  // Clear error messages on input change
  useEffect(() => {
    if (id != null && id !== '') {
      setIdError('');
    }

    if (password != null && password !== '') {
      setPasswordError('');
    }
  }, [id, password]);

  // Handle login
  const handleLogin = async () => {
    setIdError('');
    setPasswordError('');

    if (!id) {
      setIdError('아이디를 입력해주세요.');
      idRef.current?.focus();
      return;
    }

    if (!password) {
      setPasswordError('비밀번호를 입력해주세요.');
      passwordRef.current?.focus();
      return;
    }

    try {
      const response = await loginApi(id, password);
      login(response);
      setSuccess(true);
      navigate(PATH.DASHBOARD);
    } catch (error) {
      setId('');
      setPassword('');
      setSuccess(false);
      setTitle('로그인 실패');
      setMessage('아이디 또는 비밀번호가 올바르지 않습니다.');
      openModal();
    }
  }

  // Handle modal confirm
  const handleModalConfirm = () => {
    if (success) {
      closeModal();
      navigate(PATH.DASHBOARD);
    } else {
      closeModal();
      idRef.current?.focus();
    }
  }

  // Modal hook
  const { isOpen, openModal, closeModal, handleConfirm } = useModal({ onConfirmCallback: handleModalConfirm });

  
  return (
    <div className='_index_layout'>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={handleConfirm}
      >
        <ModalContent
          title={title}
          message={message}
        />
      </Modal>
      <div className={styles.loginForm}>
        <img src={isDarkMode ? logoImgDark : logoImg} alt="ECHAD Logo" onClick={() => navigate(PATH.DASHBOARD)} className={styles.logo} />

        <Input 
          type="text" 
          value={id} 
          handleChange={(e) => setId(e.target.value)} 
          placeholder='아이디'
          valueRef={idRef}
          valueError={idError}
          />
        
        <Input 
          type="password" 
          value={password} 
          handleChange={(e) => setPassword(e.target.value)} 
          placeholder='비밀번호'
          handleKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          valueRef={passwordRef}
          valueError={passwordError}
          />

        <Button variant='black' width={'100%'} height={'40px'} fontSize={'0.9rem'}  onClick={handleLogin}>로그인</Button>
      </div>
    </div>
  );
};

export default Login;