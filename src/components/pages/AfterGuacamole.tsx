import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';

export const AfterGuacamole: React.FC<PageProps> = (props: PageProps) => {
  return <div>
    Even though we haven't known each other for that long, I already feel so close to you.
    I hope we can continue making more wonderful memories together, whether it is eating, climbing, or just enjoying life.
    <button onClick={() => props.incrementPage()}>Next</button>
  </div>;
}