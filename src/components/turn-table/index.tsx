import { TurnTableData } from '@/App';
import React, { FC, memo, useState } from 'react';
import './index.scss';
import Dialog from '../dialog';
import { prefixStyle } from '../../assets/js/dom';

const transformCss = prefixStyle('transform-css');
const transformJs = prefixStyle('transform-js');
const transition = prefixStyle('transition');
const transitionend = prefixStyle('transitionend');

interface ITurnTableProps {
  turntable: TurnTableData[];
}

export interface IDialog {
  show: boolean;
  title: string;
  resultImg: string;
  resultText: string;
  destoryTime: number;
}

const turntableSuccess = 1;
const turntableFail = 2;

const TurnTable: FC<ITurnTableProps> = ({ turntable }) => {
  const [dialog, setDialog] = useState<IDialog>({
    show: false,
    title: '',
    resultImg: '',
    resultText: '',
    destoryTime: 15,
  });
  const [isGoing, setIsGoing] = useState(false);

  const gameStart = () => {
    if (!turntable.length) {
      return;
    }
    if (isGoing) {
      return;
    }
    setIsGoing(true);
    setDialog(prev => ({ ...prev, show: true }));
    const turntableEl: HTMLDivElement = document.querySelector('#turntable')!;

    // 1. 随机生成中奖结果
    const randomNum = Math.random() * 100 + 1;
    let count = 0;
    turntable.forEach(item => {
      item.min = count;
      count += Number(item.rate);
      item.max = count;
    });
    let randomRes = turntable.filter(
      item => randomNum > item.min! && randomNum <= item.max!,
    )[0];
    // 若中奖没有中奖图片，则为未中奖
    if (Number(randomRes.type) === turntableSuccess && !randomRes.result_img) {
      randomRes = turntable.filter(
        item => Number(item.type) === turntableFail,
      )[0];
    }

    // 2. 计算旋转角度，多转5圈，一圈用时1秒
    const itemDeg = (randomRes.location - 1) * (360 / turntable.length); // 第一个不用转
    const rotate = itemDeg + 5 * 360;
    const speed = (itemDeg / 360 + 5).toFixed(2);
    turntableEl.style[transformJs] = `rotate(${rotate}deg)`;
    turntableEl.style[transition] = `${transformCss} ${speed}s ease-out`;

    // 3. 监听动画结束
    const runEnd = () => {
      turntableEl.removeAttribute('style');

      // 4.显示中奖结果
      const newDialog: Partial<IDialog> = {};
      if (Number(randomRes.type) === turntableSuccess) {
        newDialog.title = '中奖啦';
        newDialog.resultText = '请扫码领取';
        newDialog.destoryTime = 5;
      } else {
        newDialog.title = '没抽中';
        newDialog.resultText = '真不巧，没抽中！';
        newDialog.destoryTime = 3;
      }
      newDialog.show = true;
      newDialog.resultImg = randomRes.result_img;
      setDialog(newDialog as IDialog);
      // this.refs.dialog.countDown(); // 倒计时

      // 中奖结果执行结束，可重新进行抽奖操作
      setTimeout(() => {
        setIsGoing(false);
        turntableEl.removeEventListener(transitionend, runEnd);
      }, newDialog.destoryTime);
    };
    turntableEl.addEventListener(transitionend, runEnd, false);
  };

  return (
    <div className="turntable-wrap">
      <div className="turntable-bg">
        <div className="light" />
        <div className="pointer" onClick={gameStart} />
        <div className="turntable" id="turntable">
          <ul className="prize">
            {turntable.map(item => (
              <li key={item.location}>
                <img className="img" src={item.icon} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <div className="decorate1" />
        <div className="decorate2" />
      </div>
      {/* <Dialog dialog={dialog} /> */}
    </div>
  );
};

export default memo(TurnTable);
