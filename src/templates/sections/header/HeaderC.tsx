import React, { type FC } from 'react';
import type { HeaderProps } from './HeaderProps';
import { useFadeIn } from '@/hooks/fadeIn/useFadeIn';
import styles from './Header.module.scss';
import Img from '@/components/img/Img';
import { useFormatDate } from '@/hooks/date/useFormatDate';

const HeaderC: React.FC<HeaderProps> = ({
  title,
  subTitle,
  title_font = 'zeyada',
  date,
  date_font,
  location,
  location_font,
  groom,
  bride,
  names_font,
  img_url
}) => {
  const { ref, active } = useFadeIn();

  const formatDate = useFormatDate(date, "M월 D일 ddd요일");

  return (
    <div ref={ref} className={`_section ${styles.header_c} ${active ? '_active' : ''}`}>
      {title && <div className={`${styles.title} ${title_font}`}>{title}</div> }
      {subTitle && <div className={`${styles.subTitle} ${title_font}`}>{subTitle}</div> }
      <div className={styles.img}>
        <Img src={img_url} alt='header_image'/>
      </div>
      <div className={`${styles.date} ${date_font}`}>{formatDate}</div>
      {location && <div className={`${styles.location} ${location_font}`}>{location}</div>}
      {groom && <div className={`${styles.names} ${names_font}`}>{groom} {bride}</div> }
    </div>
  );
};

export default HeaderC;