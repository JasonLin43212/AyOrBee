import React, { useState } from 'react';
import './ImagePicker.css';
import { MyButton } from './MyButton';

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

  const selectedImageChoice: ImageChoice | undefined = selectedIndex !== undefined
    ? props.choices[selectedIndex]
    : undefined;

  let selectedImageElement: React.ReactNode = <></>;
  if (selectedImageChoice) {
    const isCorrect: boolean = correctIndex === selectedIndex;
    selectedImageElement = <div className={"selected-image-wrapper"}>
      <div className={"selected-image"}>
        <div className={"selected-image-inner"}>
          {selectedImageChoice.image}
        </div>
      </div>
      <div className={"selected-message"}>{selectedImageChoice.message}</div>

      <MyButton
        text={isCorrect ? "Continue" : "Keep looking"}
        onClick={() => {
          if (isCorrect) {
            props.incrementPage()
          } else {
            setSelectedIndex(undefined);
          }
        }}
        back={!isCorrect}
      />
    </div>;
  }

  return <>
    <div className={'image-choice-wrapper'}>
      {props.choices.map((choice: ImageChoice, index: number): React.ReactNode => (
        <div className={"image-choice"} key={index} onClick={() => { setSelectedIndex(index) }}>
          {choice.image}
        </div>
      ))}
    </div>
    <div className={"filler"}></div>
    {selectedImageElement}
  </>
};
