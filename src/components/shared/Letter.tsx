import React from 'react';
import './Letter.css';

export type LetterProps = {
  className?: string;
  centered?: boolean;
  padding?: boolean;
};

export type LetterPropsWrapper = React.PropsWithChildren<LetterProps>;

export const Letter: React.FC<LetterPropsWrapper> = (props: LetterPropsWrapper) => {
  let letterClassNames: string[] = [];
  if (props.centered) {
    letterClassNames.push("centered-letter");
  }
  if (props.padding) {
    letterClassNames.push("letter-with-padding");
  }

  return <div className={`letter-wrapper ${props.className ?? ''}`}>
    <div className={`letter`}>
      <div className={`letter-content ${letterClassNames.join(" ")}`}>{props.children}</div>
    </div>
  </div>
};
