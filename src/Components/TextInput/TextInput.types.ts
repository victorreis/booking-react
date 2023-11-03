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

export interface DefaultTextInputProps {}

export interface OptionalTextInputProps {
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
}

export type TextInputProps = RequiredTextInputProps &
  DefaultTextInputProps &
  OptionalTextInputProps &
  TestProps &
  Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'>;

export type TextInputStyleProps = Required<DefaultTextInputProps>;
