import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';

export const PreGuacamole: React.FC<PageProps> = (props: PageProps) => {
  return <div>
    I left my present for you back in Boston.
    Instead, let's celebrate with some virtual guacamole.
    <button onClick={() => props.incrementPage()}>Next</button>
  </div>;
}