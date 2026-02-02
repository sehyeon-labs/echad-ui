import { useNavigate } from 'react-router-dom';
import styles from './Menu.module.scss';
import { PATH } from '@/utils/path';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.menu}>
      <div className={styles.menu_item} onClick={() => navigate(PATH.DASHBOARD)}>제작</div>
      <div className={styles.menu_item} onClick={() => navigate(PATH.DASHBOARD)}>방명록</div>
      <div className={styles.menu_item} onClick={() => navigate(PATH.DASHBOARD)}>갤러리</div>
      <div className={styles.menu_item} onClick={() => navigate(PATH.DASHBOARD)}>공지사항</div>
      <div className={styles.menu_item} onClick={() => navigate(PATH.DASHBOARD)}>설정</div>
    </div>
  );
};

export default Menu;