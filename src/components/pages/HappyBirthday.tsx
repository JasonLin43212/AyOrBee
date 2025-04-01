import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';

export const HappyBirthday: React.FC<PageProps> = (props: PageProps) => {

  return <div>
    <div>Happy Birthday Brie!!!!</div>
    <button onClick={() => props.incrementPage()}>Next</button>
  </div>;
}