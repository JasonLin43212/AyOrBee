import React, { useState } from 'react';

export type ImageChoice = {
  image: React.ReactNode;
  message: string;
  correct: boolean;
};

export type ImagePickerProps = {
  choices: ImageChoice[];
  incrementPage: () => void;
};

export const ImagePicker: React.FC<ImagePickerProps> = (props: ImagePickerProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);

  const correctIndex: number | undefined = props.choices
    .map((_: ImageChoice, index: number): number => index)
    .find((index: number): boolean => props.choices[index].correct);

  return <div>
    {props.choices.map((choice: ImageChoice, index: number): React.ReactNode => (
      <div key={index} onClick={() => { setSelectedIndex(index) }}>
        {choice.image}
      </div>
    ))}
    {
      selectedIndex !== undefined &&
      <div>
        {props.choices[selectedIndex].image}
        <div>{props.choices[selectedIndex].message}</div>
        <button onClick={() => { props.incrementPage(); }}>
          {correctIndex === selectedIndex ? "Continue reading letter" : "Keep looking"}
        </button>
      </div>
    }
  </div>;
};
