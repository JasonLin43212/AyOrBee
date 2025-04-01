import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';

export const Guacamole: React.FC<PageProps> = (props: PageProps) => {
  return <div>
    I left my present for you back in Boston.
    Instead, let's celebrate with virtual guacamole. Pick your favorite one!
    <button onClick={() => props.incrementPage()}>Next</button>
  </div>;
}