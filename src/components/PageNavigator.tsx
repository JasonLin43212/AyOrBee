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
import { PreGuacamole } from './pages/PreGuacamole';
import { PreEndMessage } from './pages/PreEnd';

export type PageProps = {
  incrementPage: () => void;
}

const PAGES: React.FC<PageProps>[] = [
  OpenLetter,           // 0
  HappyBirthday,        // 1
  BirthdayMessage,      // 2
  PetResult,            // 3
  PetResultMessage,     // 4
  DogEats,              // 5
  DogPick,              // 6 
  AfterDogMessage,      // 7
  RemainingMessage,     // 8
  PreGuacamole,         // 9
  Guacamole,            // 10
  AfterGuacamole,       // 11
  PreEndMessage,        // 12
  End                   // 13
];

export const PageNavigator: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(6);
  const incrementPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const CurrentPage: React.FC<PageProps> = PAGES[pageNumber];
  return <div className={"page-wrapper"}>
    <CurrentPage incrementPage={incrementPage} />
  </div>;
};
