import React, {
  useState,
  forwardRef,
  ForwardRefRenderFunction,
  useMemo,
} from 'react';

import { useTheme } from 'styled-components';

import { TestProps } from '../../Config/Tests/Test.types';
import { iconSizes } from '../../Theme/Types';
import {
  Input,
  InputContainer,
  InputIconsContainer,
  InputLabel,
} from './TextInput.styles';
import { TextInputProps, DefaultTextInputProps } from './TextInput.types';

export const textInputDefaults: Required<DefaultTextInputProps> &
  Required<TestProps> = {
  testID: 'TextInput',
  type: 'text',
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
    label,
    type = textInputDefaults.type,
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

  const defaultIconProps = useMemo(
    () => ({
      color: theme.colors.background.default.lightest,
      size: iconSizes.md,
    }),
    [theme.colors.background.default.lightest]
  );

  const renderedLeftSlot = useMemo(() => {
    if (!leftSlot || typeof leftSlot === 'string') return leftSlot;
    return React.createElement(leftSlot, defaultIconProps);
  }, [leftSlot, defaultIconProps]);

  const renderedRightSlot = useMemo(() => {
    if (!rightSlot || typeof rightSlot === 'string') return rightSlot;
    return React.createElement(rightSlot, defaultIconProps);
  }, [rightSlot, defaultIconProps]);

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>

      <InputIconsContainer>
        {renderedLeftSlot}
        <Input
          ref={ref}
          data-testid={testID}
          onChange={handleChange}
          type={type}
          value={value}
          {...others}
        >
          {children}
        </Input>
        {renderedRightSlot}
      </InputIconsContainer>
    </InputContainer>
  );
};
export const TextInput = forwardRef(TextInputComponent);
