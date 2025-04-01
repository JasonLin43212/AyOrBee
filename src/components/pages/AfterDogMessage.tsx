import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';

export const AfterDogMessage: React.FC<PageProps> = (props: PageProps) => {
  return <div>
    Yippee! You got the letter back!
    <button onClick={() => props.incrementPage()}>Continue reading</button>
  </div>;
}