import React, { useState } from 'react';
import styles from './Button.module.scss'
import { useFadeIn } from '@/hooks/fadeIn/useFadeIn';
import type { ButtonProps } from './ButtonProps';
import arrow from '@/assets/icons/arrow.png';

const ButtonA: React.FC<ButtonProps> = ({
  title,
  leftTitle,
  leftContent,
  rightTitle,
  rightContent,
  width = '100%',
}) => {
  const { ref, active } = useFadeIn();

  const [isGroom, setIsGroom] = useState(false);
  const [isBride, setIsBride] = useState(false);

  const [copied, setCopied] = useState(false);

  const handleChangeState = (i: number) => {
    if (!i) setIsGroom(prev => !prev);
    else setIsBride(prev => !prev);
  }

  const handleCopy = async (text: string) => {
    if (!text) return;

    await navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <>
      {copied && <div className={styles.toast}>계좌번호가 복사되었습니다</div>}

      <div ref={ref} className={`_section ${styles.button_a} ${active ? '_active' : ''}`} style={{width}}>
        
        <div className={styles.title}>{title}</div>
        
        <div className={styles.btn}>
          <div className={styles.btn_title} onClick={() => handleChangeState(0)}>
            <div>{leftTitle}</div>
            <div className={`${styles.arrow} ${isGroom ? styles.active : ''}`}><img src={arrow}/></div>
          </div>
          
          {isGroom && leftContent && (
            <>
              {leftContent.map((item) => {
                return (
                  <div className={styles.content}>

                    <div className={styles.content_header}>
                      <div className={styles.content_bank}>
                        <div className={styles.bank}>{item.bank}</div>
                        <div className={styles.account}>{item.account}</div>  
                      </div>

                      <div className={styles.content_info}>
                        <div className={styles.relation}>{item.relation}</div>
                        <div className={styles.name}>{item.name}</div>
                      </div>
                    </div>
                    
                    <button className={styles.copy} onClick={() => handleCopy(`${item.bank} ${item.account}`)}>복사</button>

                  </div>
                )
              })}
            </>
          )}
        </div>

        <div className={styles.btn}>
          <div className={styles.btn_title} onClick={() => handleChangeState(1)}>
            <div>{rightTitle}</div>
            <div className={`${styles.arrow} ${isBride ? styles.active : ''}`}><img src={arrow}/></div>
          </div>

          {isBride && rightContent && (
            <>
              {rightContent.map((item) => {
                return (
                  <div className={styles.content}>

                    <div className={styles.content_header}>
                      <div className={styles.content_bank}>
                        <div className={styles.bank}>{item.bank}</div>
                        <div className={styles.account}>{item.account}</div>  
                      </div>

                      <div className={styles.content_info}>
                        <div className={styles.relation}>{item.relation}</div>
                        <div className={styles.name}>{item.name}</div>
                      </div>
                    </div>
                    
                    <button className={styles.copy} onClick={() => handleCopy(`${item.bank} ${item.account}`)}>복사</button>

                  </div>
                )
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ButtonA;