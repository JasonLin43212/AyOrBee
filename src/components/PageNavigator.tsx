import React, { useState } from 'react';
import { OpenLetter } from './pages/OpenLetter';
import { HappyBirthday } from './pages/HappyBirthday';
import { BirthdayMessage } from './pages/BirthdayMessage';
import { PetResult } from './pages/PetResult';
import { PetResultMessage } from './pages/PetResultMessage';
import { DogEats } from './pages/DogEat';
import { DogPick } from './pages/DogPick';
import { RemainingMessage } from './pages/RemainingMessage';
import { AfterDogMessage } from './pages/AfterDogMessage';
import { Guacamole } from './pages/Guacamole';
import { End } from './pages/End';
import { AfterGuacamole } from './pages/AfterGuacamole';

export type PageProps = {
  incrementPage: () => void;
}

const PAGES: React.FC<PageProps>[] = [
  OpenLetter,
  HappyBirthday,
  BirthdayMessage,
  PetResult,
  PetResultMessage,
  DogEats,
  DogPick,
  AfterDogMessage,
  RemainingMessage,
  Guacamole,
  AfterGuacamole,
  End
];

export const PageNavigator: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const incrementPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const CurrentPage: React.FC<PageProps> = PAGES[pageNumber];
  return <CurrentPage incrementPage={incrementPage} />;
};
