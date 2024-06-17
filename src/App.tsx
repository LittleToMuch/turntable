import { useEffect, useState } from 'react';

import json from './api/turntable.js';
import Turntable from './components/turn-table';
import Header from './components/header';

export interface TurnTableData {
  location: number;
  type: number;
  icon: string;
  result_img: string;
  rate: number; //中奖率
  message: string;
  min?: number;
  max?: number;
}

export const App = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const [turntable, setTurntable] = useState<TurnTableData[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setTurntable(json.lottery);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <div className="loading">正在努力加载</div>;
  }
  return (
    <div className="app">
      <Header />
      <Turntable turntable={turntable} />
      {/* <Rule rule={rule}/> */}
    </div>
  );
};
