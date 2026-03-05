import { useEffect, useRef, useState } from 'react';

export const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setActive(true);
        } else {
          setActive(false);
        }
      },
      {
        threshold: [0, 0.5],
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, active };
};
