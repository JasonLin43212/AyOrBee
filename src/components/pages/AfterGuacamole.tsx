import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';
import { MyButton } from '../shared/MyButton';

export const AfterGuacamole: React.FC<PageProps> = (props: PageProps) => {
  return <>
    <div className={"centered-text"}>
      <div className={"normal-text"}>
        I hope you like guacamole! Too bad there isn't a bird that looks like tomato egg. Anyways...
      </div>
    </div>
    <MyButton
      text={"Continue reading"}
      onClick={props.incrementPage}
    />
  </>;
}