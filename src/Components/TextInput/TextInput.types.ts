import { HTMLInputTypeAttribute } from 'react';
import { IconType } from 'react-icons';

import { TestProps } from '../../Config/Tests/Test.types';

export interface RequiredTextInputProps {
  /**
   * Value to be controlled by the component.
   */
  value: string;

  /**
   * Callback function that is called when the input is changed.
   */
  onChange: (newValue: string) => void;
}

export interface DefaultTextInputProps {
  /**
   * Input data type.
   * @default 'text'
   */
  type?: HTMLInputTypeAttribute;
}

export interface OptionalTextInputProps {
  /**
   * Input label.
   */
  label?: string;

  /**
   * Regular expression to be used to filter the input data.
   */
  filterInputRegex?: RegExp;

  /**
   * Left slot for putting any kind of ReactNode.
   */
  leftSlot?: IconType | string;

  /**
   * Right slot for putting any kind of ReactNode.
   */
  rightSlot?: IconType | string;

  /**
   * Min value in case of type="number".
   */
  min?: string;
}

export type TextInputProps = RequiredTextInputProps &
  DefaultTextInputProps &
  OptionalTextInputProps &
  TestProps &
  Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'>;

export type TextInputStyleProps = Required<DefaultTextInputProps>;
