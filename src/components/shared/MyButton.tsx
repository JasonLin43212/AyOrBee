import React from 'react';
import './MyButton.css';

export type ByButton = {
  text: string;
  onClick: () => void;
  back?: boolean;
};

export const MyButton: React.FC<ByButton> = (props: ByButton) => {
  return <div className={`my-button-wrapper ${props.back ? 'back-button-wrapper' : 'forward-button-wrapper'}`}>
    <div className={"my-button-side-text"}>{props.text}</div>
    <button
      className={"my-button"}
      onClick={() => props.onClick()}
    >
      <span className={"my-button-inner-text"}>{props.back ? "←" : "→"}</span>
    </button>
  </div>
} 