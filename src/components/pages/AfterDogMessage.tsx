import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';
import { MyButton } from '../shared/MyButton';
import './AfterDogMessage.css';

export const AfterDogMessage: React.FC<PageProps> = (props: PageProps) => {
  return <>
    <div className={"centered-text"}>
      <div className={"normal-text"}>
        Unfortunately, the dog ate some of the birthday card. I guess we will never know what I wanted to tell you.
      </div>
    </div>
    <MyButton
      text={"Continue reading"}
      onClick={props.incrementPage}
    />
  </>;
}