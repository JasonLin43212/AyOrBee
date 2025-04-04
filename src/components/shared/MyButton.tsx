import React from 'react';
import './MyButton.css';

export type ByButton = {
  text: string;
  onClick: () => void;
  back?: boolean;
};

export const MyButton: React.FC<ByButton> = (props: ByButton) => {
  return <div
    onClick={() => props.onClick()}
    className={`my-button-wrapper ${props.back ? 'back-button-wrapper' : 'forward-button-wrapper'}`}
  >
    <div className={"my-button-side-text"}>{props.back ? "← " : ""}{props.text}{!props.back ? "→" : ""}</div>
  </div>
} 