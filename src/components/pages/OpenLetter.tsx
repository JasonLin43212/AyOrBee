import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';

export const OpenLetter: React.FC<PageProps> = (props: PageProps) => {

  return <div>
    From: Jason
    To: Brie
    <button onClick={() => props.incrementPage()}>Open Letter</button>
  </div>;
}