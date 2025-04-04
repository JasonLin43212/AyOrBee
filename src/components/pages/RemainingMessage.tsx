import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';
import { Letter } from '../shared/Letter';
import { MyButton } from '../shared/MyButton';

export const RemainingMessage: React.FC<PageProps> = (props: PageProps) => {
  return <>
    <Letter padding centered>
      <div>
        I'm super grateful that I can always rely on you to listen to me and help me understand my emotions.
        Thank you for being there for me.
      </div>
    </Letter>
    <MyButton
      text={"Next"}
      onClick={props.incrementPage}
    />
  </>
}