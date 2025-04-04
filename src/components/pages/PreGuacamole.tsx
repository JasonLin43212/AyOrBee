import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';
import { Letter } from '../shared/Letter';
import { MyButton } from '../shared/MyButton';

export const PreGuacamole: React.FC<PageProps> = (props: PageProps) => {
  return <>
    <Letter padding centered>
      <div>
        I will give you your present when we go back to Boston.
        For now, let's celebrate with some virtual guacamole!
      </div>
    </Letter>
    <MyButton
      text={"Look at guacamole!"}
      onClick={props.incrementPage}
    />
  </>
}