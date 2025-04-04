import React from 'react';

export type TextFadeInProps = {
  delay: number;
  splitMode: "word" | "letter";
};

export type TextFadeInWrapperProps = React.PropsWithChildren<TextFadeInProps>;

export const TextFadeIn: React.FC<TextFadeInWrapperProps> = (props: TextFadeInWrapperProps) => {



  return <></>
}