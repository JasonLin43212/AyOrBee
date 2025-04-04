import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';
import { MyButton } from '../shared/MyButton';
import { Letter } from '../shared/Letter';
import './BirthdayMessage.css';

export const BirthdayMessage: React.FC<PageProps> = (props: PageProps) => {
  return <>
    <Letter className={"birthday-message-letter"} centered padding>
      <div className={"birthday-message"}>
        Thank you for being the bestest friend anyone could ever ask for!
        I am so glad to have been able to meet you.
      </div>
    </Letter>
    <MyButton
      text={"Continue"}
      onClick={props.incrementPage}
    />
  </>;
}