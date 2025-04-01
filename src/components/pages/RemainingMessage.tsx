import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';

export const RemainingMessage: React.FC<PageProps> = (props: PageProps) => {
  return <div>
    I'm super grateful that I can always rely on you to listen to me and help me understand my emotions.
    Thank you for being there for me.
    <button onClick={() => props.incrementPage()}>Next</button>
  </div>;
}