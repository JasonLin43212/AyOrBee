import React, { useState } from 'react';
import { PageProps } from '../PageNavigator';

export const PetResultMessage: React.FC<PageProps> = (props: PageProps) => {
  return <div>
    You are indeed a Happy Pup, so full of energy, laughter, and excitement for life!

    Even when I first met you, I noticed how you were different from everyone else.
    Your level of enthusiasm when speaking with others is intoxicating and you are literally the glue that holds everyone together.
    I have a very clear memory of you doing the blue V6 with your favorite holds at Central Rock Gym Cambridge.
    You were always working on really hard problems, repeating your projects, having long abdominal workouts to warm up and
    doing inside flags, which was all so cool. Your footwork is precise when you warm up and you always look so smooth and
    intentional with every move you make. So iconic! Those red Crocs? Also iconic!


    <button onClick={() => props.incrementPage()}>Next</button>
  </div>;
}