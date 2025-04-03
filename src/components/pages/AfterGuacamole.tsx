import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';

export const AfterGuacamole: React.FC<PageProps> = (props: PageProps) => {
  return <div>
    I hope you like guacamole! Too bad there isn't a bird that looks like tomato egg. Anyway...
    <button onClick={() => props.incrementPage()}>Next</button>
  </div>;
}