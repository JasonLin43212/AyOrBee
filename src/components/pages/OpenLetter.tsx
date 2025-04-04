import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';
import './OpenLetter.css';
import { MyButton } from '../shared/MyButton';
import { Letter } from '../shared/Letter';

import goose from '../../images/goose.png';
import tomato from '../../images/tomato.png';
import egg from '../../images/egg.png';
import croc from '../../images/crocs.png';
import ambessa from '../../images/ambessa.png';

export const OpenLetter: React.FC<PageProps> = (props: PageProps) => {

  return <>
    {/* TODO: add images of tomatoes, eggs, cupcake, canadian goose, cat, snail, zucchini, kombat squash */}
    <Letter className={"open-letter"}>
      <span className={"letter-from"}>From: Jason</span>
      <span className={"letter-to"}>To: Brie</span>
      <img src={goose} className={"goose"} />
      <img src={tomato} className={"tomato"} />
      <img src={egg} className={"egg"} />
      <img src={croc} className={"croc"} />
      <img src={ambessa} className={"ambessa"} />
    </Letter>
    <MyButton text={"Open Birthday Card"} onClick={props.incrementPage} />
  </>;
}