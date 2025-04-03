import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';
import dogEat from '../../images/dogEatingPaper.png';
import { NextButton } from '../shared/NextButton';
import './DogEat.css';
import { Letter } from '../shared/Letter';

export const DogEats: React.FC<PageProps> = (props: PageProps) => {
  return <>
    <div className={"small-image-wrapper"}>
      <img src={dogEat} className={"dog-eat"} />
    </div>
    <div className={"normal-text"}>
      Suddenly, out of nowhere, the Happy Pup snatches the letter from you and runs away!
    </div>
    <NextButton
      text={"Chase It!"}
      incrementPage={props.incrementPage}
    />
  </>
}