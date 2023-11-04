import { useState } from 'react';

import { TestProps } from '../../Config/Tests/Test.types';
import { ButtonContainer } from './Button.styles';
import { ButtonProps, DefaultButtonProps } from './Button.types';

export const buttonDefaults: Required<DefaultButtonProps> &
  Required<TestProps> = {
  testID: 'Button',
  type: 'button',
  size: 'LG',
  disabled: false,
  full: false,
};

export const Button: React.FC<ButtonProps> = (props): JSX.Element => {
  const {
    testID = buttonDefaults.testID,
    children,
    type = buttonDefaults.type,
    size = buttonDefaults.size,
    disabled = buttonDefaults.disabled,
    full = buttonDefaults.full,
    onClick,
    hoverFeedbackColor,
    hoverText,
    ...others
  } = props;

  const [text, setText] = useState<string>(children);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  const handleMouseEnter = () => {
    if (hoverText) {
      setText(hoverText);
    }
  };
  const handleMouseLeave = () => {
    setText(children);
  };

  return (
    <ButtonContainer
      $full={full}
      $size={size}
      data-testid={testID}
      disabled={disabled}
      hoverFeedbackColor={hoverFeedbackColor}
      hoverText={hoverText}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      type={type}
      {...others}
    >
      {text}
    </ButtonContainer>
  );
};
