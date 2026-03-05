import React from 'react';
import type { ContentProps } from './ContentProps';
import styles from './Content.module.scss';
import { useFadeIn } from '@/hooks/fadeIn/useFadeIn';

const ContentA: React.FC<ContentProps> = ({
  title,
  title_color = 'var(--color-font-gray)',
  title_size = '0.8rem',
  message,
  message_color = 'var(--color-font-black)',
  message_size = '0.8rem',
  width = '100%',
  line_height = 2.5,
  font
}) => {
  const { ref, active } = useFadeIn();

  return (
    <div ref={ref} className={`_section ${styles.content_a} ${active ? '_active' : ''}`}>
      <div className={`${styles.title} ${font}`} style={{color: title_color, fontSize: title_size}}>{title}</div>
      <div className={`${styles.message} ${font}`} style={{width, color: message_color, fontSize: message_size, lineHeight: line_height}}>{message}</div>
    </div>
  );
};

export default ContentA;