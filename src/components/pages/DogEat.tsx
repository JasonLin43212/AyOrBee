import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';

export const DogEats: React.FC<PageProps> = (props: PageProps) => {
  return <div>
    Suddenly, out of nowhere, a dog snatches the letter from you and runs away!


    <button onClick={() => props.incrementPage()}>Chase after it!</button>
  </div>;
}