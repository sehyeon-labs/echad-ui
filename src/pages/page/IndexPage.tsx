import styles from './IndexPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/utils/path';
import { useDarkMode } from '@/hooks/dark-mode/useDarkMode';
import Button from '@/components/button/Button';
import logo from '@/assets/logo-text.png';
import logoDark from '@/assets/logo-text-dark.png';

const IndexPage = () => {
  const navigate = useNavigate();

  const isDarkMode = useDarkMode();
  return (
    <div className='_index_layout'>

      <div className={styles.indexContent}>
        <img src={isDarkMode ? logoDark : logo} alt="Logo" onClick={() => navigate(PATH.DASHBOARD)} className={styles.logo} />

        <Button variant='black' onClick={() => navigate(PATH.LOGIN)} width={'200px'} height={'40px'}>LOGIN</Button>
        <Button variant='black' width={'200px'} height={'40px'}>JOIN</Button>
        <Button variant='black' onClick={() => navigate(PATH.DASHBOARD)} width={'200px'} height={'40px'}>HOME</Button>
      </div>
    </div>
  );
};

export default IndexPage;