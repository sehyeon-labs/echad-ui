import React from 'react';
import { PATH } from '@/utils/path';
import { useNavigate } from 'react-router-dom';

interface ImgProps {
  src: string;
  alt: string;
  className?: string;
  cursor?: boolean;
  path?: keyof typeof PATH;
}

const Img : React.FC<ImgProps> = ({
  src,
  alt,
  className,
  cursor = false,
  path = 'DASHBOARD',
}) => {
  const navigate = useNavigate();

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ cursor: cursor ? 'pointer' : 'default' }}
      onClick={() => navigate(PATH[path])}/>
  );
};

export default Img;