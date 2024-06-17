import React, { FC, memo, useEffect } from 'react';
import './index.scss';

interface IHeaderProps {}

const Header: FC<IHeaderProps> = props => {
  useEffect(() => {
    // your code
  }, []);

  return (
    <div className="header-wrap">
      <div className="con" />;
    </div>
  );
};

export default memo(Header);
