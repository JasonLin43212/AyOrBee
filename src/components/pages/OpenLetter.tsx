import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';
import './OpenLetter.css';
import { NextButton } from '../shared/NextButton';
import { Letter } from '../shared/Letter';

export const OpenLetter: React.FC<PageProps> = (props: PageProps) => {

  return <>
    {/* TODO: add images of tomatoes, eggs, cupcake, canadian goose, cat, snail, zucchini, kombat squash */}
    <Letter className={"open-letter"}>
      <span className={"letter-from"}>From: Jason</span>
      <span className={"letter-to"}>To: Brie</span>
    </Letter>
    <NextButton text={"Open Letter"} incrementPage={props.incrementPage} />
  </>;
}