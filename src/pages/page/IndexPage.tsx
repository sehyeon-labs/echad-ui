import React, { useEffect } from 'react';
import styles from './IndexPage.module.scss';
import { useNavigate } from 'react-router-dom';

const IndexPage: React.FC = () => {
  const navigate = useNavigate();
  const [id, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleLogin = () => {
    if (id === 'jungu-sehyeon' && password === '1234') {
      setErrorMessage('');
      alert('로그인 성공!');
      navigate(`/setting/${id}`);
    } else {
      setErrorMessage('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  }

  return (
    <div className='_index_layout'>

      <div className={styles.loginForm}>
        <img src="/src/assets/logo_text.png" alt="ECHAD Logo" className={styles.logo} />
        
        <input type="text" 
          value={id} 
          onChange={(e) => setId(e.target.value)} 
          placeholder='아이디'
          className={`${styles.input} ${id && styles.verifyInput}`}/>
        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        
        <input type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder='비밀번호'
          className={`${styles.input} ${password && styles.verifyInput}`}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}/>
        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}

        <button className={styles.loginButton} onClick={handleLogin}>로그인</button>
      </div>
    </div>
  );
};

export default IndexPage;