import React from 'react';
import './MyButton.css';
import left from '../../images/left.png';


export type ByButton = {
  text: string;
  onClick: () => void;
  back?: boolean;
};

export const MyButton: React.FC<ByButton> = (props: ByButton) => {
  return <div
    className={`my-button-wrapper ${props.back ? 'back-button-wrapper' : 'forward-button-wrapper'}`}
  >
    <button className={"my-button"} onClick={() => props.onClick()}>
      {props.text}
    </button>
  </div>
} 