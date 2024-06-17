import React, { FC, memo, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.scss';
import { IDialog } from '../turn-table';

interface IDialogProps {
  dialog: IDialog;
  onDestory: () => void;
}

const Dialog: FC<IDialogProps> = ({ dialog, onDestory }) => {
  const { show, title, resultImg, resultText, destoryTime } = dialog;

  return (
    <div className="dialog-wrap">
      <div className={show ? 'mask show' : 'mask hide'} />
      <CSSTransition
        in={show}
        timeout={800}
        classNames="bounce-in"
        unmountOnExit
      >
        <div className="con">
          <h3 className="title">{title}</h3>
          <div className="main">
            <img className="img" src={resultImg} alt="" />
            <span className="text">{resultText}</span>
          </div>
          <button className="btn" onClick={onDestory}>
            {destoryTime}s 返回页面
          </button>
        </div>
      </CSSTransition>
    </div>
  );
};

export default memo(Dialog);
