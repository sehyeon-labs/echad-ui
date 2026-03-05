import React, { type FC } from 'react';
import type { HeaderProps } from './HeaderProps';
import { useFadeIn } from '@/hooks/fadeIn/useFadeIn';
import styles from './Header.module.scss';
import Img from '@/components/img/Img';
import { useFormatDate } from '@/hooks/date/useFormatDate';

const HeaderA: React.FC<HeaderProps> = ({
  title,
  subTitle,
  title_font,
  date,
  date_font,
  groom,
  bride,
  names_font,
  img_url
}) => {
  const { ref, active } = useFadeIn();

  const formatDate = useFormatDate(date, "M月 D日");

  return (
    <div ref={ref} className={`_section ${styles.header_a} ${active ? '_active' : ''}`}>
      <div className={`${styles.date} ${date_font}`}>{formatDate}</div>
      <div className={styles.img}>
        <Img src={img_url} alt='header_image'/>
      </div>
      {title && <div className={`${styles.title} ${title_font}`}>{title}</div> }
      {subTitle && <div className={`${styles.subTitle} ${title_font}`}>{subTitle}</div> }
      {groom && <div className={`${styles.names} ${names_font}`}>{groom} {bride}</div> }
    </div>
  );
};

export default HeaderA;