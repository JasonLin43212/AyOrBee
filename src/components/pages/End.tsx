import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';
import brie from '../../images/brie.jpg';

export const End: React.FC<PageProps> = (props: PageProps) => {
  return <div>
    Congratulations on turning 24!
    <img src={brie} />
  </div>;
}