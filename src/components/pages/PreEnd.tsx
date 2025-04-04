import React from 'react';
import { PageProps } from '../PageNavigator';
import { Letter } from '../shared/Letter';
import { MyButton } from '../shared/MyButton';
import './PreEnd.css';

export const PreEndMessage: React.FC<PageProps> = (props: PageProps) => {
  return <>
    <Letter className={"pre-end-message-letter"} centered padding>
      <div>
        Even though we haven't known each other for that long, I already feel so close to you.
        I hope we can continue making more wonderful memories together, whether it is eating, climbing, or just enjoying life.
      </div>
    </Letter>
    <MyButton
      text={"Finish it off!"}
      onClick={props.incrementPage}
    />
  </>;
}