import React from 'react';

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout = ({children}: ContentLayoutProps) => {
  return (
    <div className='_layout'>
      <div className='_content_layout'>
        {children}
      </div>

      <div className='_footer'>FOOTER</div>
    </div>
  );
};

export default ContentLayout;