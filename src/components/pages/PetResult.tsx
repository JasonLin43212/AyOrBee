import React from 'react';
import { PageProps } from '../PageNavigator';
import happyPup from '../../images/happyPup.png';
import './PetResult.css';
import { NextButton } from '../shared/NextButton';
import { Letter } from '../shared/Letter';
import './PetResult.css';

export const PetResult: React.FC<PageProps> = (props: PageProps) => {
  return <>
    <div className={"happy-pup-wrapper"}>
      <img src={happyPup} className={"happy-pup"} />
    </div>
    <Letter centered padding>
      <div>Even though our personalities are quite the opposite, we surprisingly get along well!</div>
    </Letter>
    <NextButton
      text={"Continue"}
      incrementPage={props.incrementPage}
    />
  </>;
}