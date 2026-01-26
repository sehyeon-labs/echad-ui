import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Invitation = () => {
  const { slug } = useParams<{slug: string}>();

  const groom = '준구';
  const bride = '세현';

  useEffect(() => {
    document.title = `${groom} ♥︎ ${bride}`;
  }, [groom, bride]);

  return (
    <div>
      
    </div>
  );
};

export default Invitation;