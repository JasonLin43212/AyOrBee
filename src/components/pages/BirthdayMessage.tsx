import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';

export const BirthdayMessage: React.FC<PageProps> = (props: PageProps) => {
  return <div>
    Thank you for being the bestest friend anyone could ever ask for!
    I am so glad to have been able to meet you.
    <button onClick={() => props.incrementPage()}>Next</button>
  </div>;
}