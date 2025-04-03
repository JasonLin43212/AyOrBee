import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';

import guacamole1 from '../../images/bird/guac_1.png';
import guacamole2 from '../../images/bird/guac_2.png';
import guacamole3 from '../../images/bird/guac_3.png';
import guacamole4 from '../../images/bird/guac_4.png';

import parrot1 from '../../images/bird/parrot_1.png';
import parrot2 from '../../images/bird/parrot_2.png';
import parrot3 from '../../images/bird/parrot_3.png';
import parrot4 from '../../images/bird/parrot_4.png';
import { ImageChoice, ImagePicker } from '../shared/ImagePicker';
import { pickRandomItemFromArray, pickRandomUniqueItemsFromArray, shuffleArray } from '../../utils';

const guacamoles = [guacamole1, guacamole2, guacamole3, guacamole4];
const parrots = [parrot1, parrot2, parrot3, parrot4];

const correctMessages: string[] = [
  "Om nom nom nom. Yummy!",
  "Great with chips.",
  "Best sauce to pair with a whole rotisserie chicken!",
  "So delicious!",
  "Just the right balance of acidity and creaminess."
];

const incorrectMessages: string[] = [
  "Brie, that is a bird...",
  "Caw caw caw.",
  "This guacamole is a bit... feathery.",
  "\"Hokaah Hokaah\", said the parrot. That means \"I am friend, not food.\"",
  "Not the vegan option.",
  "Tastes just like chicken... bLeHHehhehh!",
];

const guacamole = pickRandomItemFromArray(guacamoles);
const guacMessage = pickRandomItemFromArray(correctMessages);
const parrotImgs = pickRandomUniqueItemsFromArray(parrots, 3);
const parrotMessages = pickRandomUniqueItemsFromArray(incorrectMessages, 3);

const guacChoices: ImageChoice[] = [
  {
    image: <img src={guacamole} />,
    message: guacMessage,
    correct: true,
  },
  ...parrotMessages.map((message: string, index: number): ImageChoice => ({
    image: <img src={parrotImgs[index]} />,
    message,
    correct: false,
  }))
];
shuffleArray(guacChoices);

export const Guacamole: React.FC<PageProps> = (props: PageProps) => {
  return <div>
    Pick your favorite guacamole!
    <ImagePicker
      choices={guacChoices}
      incrementPage={props.incrementPage}
    />
  </div>;
}