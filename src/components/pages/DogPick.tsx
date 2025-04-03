import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';

// Dog Images
import dog1 from '../../images/dog/dog_1.png';
import dog2 from '../../images/dog/dog_2.png';
import dog3 from '../../images/dog/dog_3.png';
import dog4 from '../../images/dog/dog_4.png';
import dog5 from '../../images/dog/dog_5.png';

import muffin1 from '../../images/dog/muffin_1.png';
import muffin2 from '../../images/dog/muffin_2.png';
import muffin3 from '../../images/dog/muffin_3.png';
import muffin4 from '../../images/dog/muffin_4.png';
import muffin5 from '../../images/dog/muffin_5.png';
import { pickRandomItemFromArray, pickRandomUniqueItemsFromArray, shuffleArray } from '../../utils';
import { ImageChoice, ImagePicker } from '../shared/ImagePicker';
import './DogPick.css';

const dogs = [dog1, dog2, dog3, dog4, dog5];
const muffins = [muffin1, muffin2, muffin3, muffin4, muffin5];
const correctMessages: string[] = [
  "Good job, Brie! You caught the dog.",
  "Hooray, the dog has been caught.",
  "Nice! The dog has been caught red-paw-ed.",
  "Yippee! You got your card back from the dog."
];

const incorrectMessages: string[] = [
  "Silly Brie, this is a muffin, not a dog!",
  "Are you hungry Brie? Muffins can't run!",
  "Is that really the culprit?",
  "\"Arf Arf\", said the muffin. That is muffin language for \"I did nothing wrong!\"",
  "I know the muffin looks so enticing, but it doesn't have your birthday card.",
  "Did you know that muffins are not dogs?",
  "Dogs and muffins are both sweet, but muffins can't steal."
];

const dogSrc = pickRandomItemFromArray(dogs);
const dogMessage: string = pickRandomItemFromArray(correctMessages);
const muffinSrcs = pickRandomUniqueItemsFromArray(muffins, 3);
const muffinMessages: string[] = pickRandomUniqueItemsFromArray(incorrectMessages, 3);

const dogChoices: ImageChoice[] = [
  {
    image: <img src={dogSrc} />,
    correct: true,
    message: dogMessage,
  },
  ...muffinMessages.map((muffinMesssage: string, index: number): ImageChoice => ({
    image: <img src={muffinSrcs[index]} />,
    correct: false,
    message: muffinMesssage
  }))
];
shuffleArray(dogChoices);

export const DogPick: React.FC<PageProps> = (props: PageProps) => {
  return <>
    <div className={"normal-text"}>
      You chased the Happy Pup until you cornered it at a bakery.
      <div className={"catch-it"}>Catch it!</div>
    </div>

    <ImagePicker
      choices={dogChoices}
      incrementPage={props.incrementPage}
    />
  </>;
}