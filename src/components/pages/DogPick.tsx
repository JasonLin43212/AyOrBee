import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';

export const DogPick: React.FC<PageProps> = (props: PageProps) => {
  return <div>
    You chased the dog until you cornered it at a bakery. Catch it!


    <button onClick={() => props.incrementPage()}>Chase after it!</button>
  </div>;
}