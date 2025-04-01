import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';

export const PetResult: React.FC<PageProps> = (props: PageProps) => {
  return <div>
    Pet result here
    Even though our personalities are quite the opposite, we surprisingly get along well!
    <button onClick={() => props.incrementPage()}>Next</button>
  </div>;
}