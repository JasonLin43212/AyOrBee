import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';
import { MyButton } from '../shared/MyButton';
import { Letter } from '../shared/Letter';
import './HappyBirthday.css';

export const HappyBirthday: React.FC<PageProps> = (props: PageProps) => {

  return <>
    <Letter className='happy-birthday-brie' centered padding>
      <div>Happy Birthday Brie!!!!</div>
    </Letter>
    <MyButton
      text={"Continue"}
      onClick={props.incrementPage}
    />
  </>;
}