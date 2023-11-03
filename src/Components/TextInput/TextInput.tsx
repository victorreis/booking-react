import React, {
  useState,
  forwardRef,
  ForwardRefRenderFunction,
  useMemo,
} from 'react';

import { useTheme } from 'styled-components';

import { TestProps } from '../../Config/Tests/Test.types';
import { iconSizes } from '../../Theme/Types';
import { Input, InputContainer } from './TextInput.styles';
import { TextInputProps, DefaultTextInputProps } from './TextInput.types';

export const textInputDefaults: Required<DefaultTextInputProps> &
  Required<TestProps> = {
  testID: 'TextInput',
};

const TextInputComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = (props, ref) => {
  const {
    testID = textInputDefaults.testID,
    children,
    value: initialValue,
    onChange,
    filterInputRegex,
    leftSlot,
    rightSlot,
    ...others
  } = props;

  const theme = useTheme();
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;
    if (filterInputRegex) {
      newValue = newValue.replaceAll(filterInputRegex, '');
    }
    setValue(() => newValue);
    onChange(newValue);
  };

  const renderedLeftSlot = useMemo(() => {
    if (!leftSlot || typeof leftSlot === 'string') return leftSlot;

    return React.createElement(leftSlot, {
      color: theme.colors.background.default.lightest,
      size: iconSizes.md,
    });
  }, [leftSlot, theme.colors.background.default.lightest]);

  const renderedRightSlot = useMemo(() => {
    if (!rightSlot || typeof rightSlot === 'string') return rightSlot;

    return React.createElement(rightSlot, {
      color: theme.colors.background.default.lightest,
      size: iconSizes.md,
    });
  }, [rightSlot, theme.colors.background.default.lightest]);

  return (
    <InputContainer>
      {renderedLeftSlot}
      <Input
        ref={ref}
        data-testid={testID}
        onChange={handleChange}
        type="text"
        value={value}
        {...others}
      >
        {children}
      </Input>
      {renderedRightSlot}
    </InputContainer>
  );
};
export const TextInput = forwardRef(TextInputComponent);
