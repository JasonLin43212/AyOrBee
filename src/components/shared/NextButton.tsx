import React from 'react';
import './NextButton.css';

export type NextButtonProps = {
  text: string;
  incrementPage: () => void;
};

export const NextButton: React.FC<NextButtonProps> = (props: NextButtonProps) => {
  return <div className={'next-button-wrapper'}>
    <div className={"next-button-side-text"}>{props.text}</div>
    <button
      className={"next-button"}
      onClick={() => props.incrementPage()}
    >
      <span className={"next-button-inner-text"}>→</span>
    </button>
  </div>
} 