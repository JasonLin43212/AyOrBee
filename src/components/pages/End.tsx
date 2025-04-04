import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';
import brie from '../../images/brie.jpg';
import './End.css';

export const End: React.FC<PageProps> = (props: PageProps) => {
  return <>
    <div className={"normal-text bold-text"}>
      Congratulations on turning 24!
    </div>
    <div className={"end-image-wrapper"}>
      <div className={"end-image-inner"}>
        <img src={brie} />
      </div>
    </div>
  </>;
}