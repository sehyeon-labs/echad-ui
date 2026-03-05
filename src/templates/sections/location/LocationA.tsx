import React from 'react';
import styles from './Location.module.scss';

const LocationA = () => {
  return (
    <div>
            <div ref={section8.ref} className={`${styles.section_8} ${styles.fadeUp} ${section8.active ? styles.active : ""}`}>
              <div className={styles.location}>
                <div className={styles.title}>결혼식장 위치</div>
      
                <div className={styles.map}>
                  <a
                    href="https://map.kakao.com/?itemId=8700757"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="http://t1.daumcdn.net/roughmap/imgmap/b5ac376d5a470fe7bc287e569bf375a65cb09a85f57725d3e9c4a5f553cd427f"
                      alt="더베뉴지 서울 지도"
                    />
                  </a>
                </div>
      
                <div className={styles.location}>위치. {location}</div>
                <div className={styles.date}>일시. {month}월 {day}일 {date.getHours()}시</div>
      
                <div className={styles.mapActions}>
                  <a
                    href="https://kko.to/vUHfVXwm9_"
                    target="_blank"
                    className={styles.kakao}
                  >
                    카카오맵
                  </a>
                  <a
                    href="https://naver.me/x5GojlWc"
                    target="_blank"
                    className={styles.naver}
                  >
                    네이버지도
                  </a>
                </div>
              </div>
            </div>
    </div>
  );
};

export default LocationA;