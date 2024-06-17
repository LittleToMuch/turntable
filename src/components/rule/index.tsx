import React, { FC, memo, useEffect } from 'react';
import './index.scss';

interface IRuleProps {}

const Rule: FC<IRuleProps> = props => {
  useEffect(() => {
    // your code
  }, []);

  return (
    <div className="rule-wrap">
      <h2 className="title">❤️龙龙宝贝专用❤️</h2>
    </div>
  )
};

export default memo(Rule);
