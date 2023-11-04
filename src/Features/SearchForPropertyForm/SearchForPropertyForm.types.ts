import { TestProps } from '../../Config/Tests/Test.types';

export interface RequiredSearchForPropertyFormProps {}

export interface DefaultSearchForPropertyFormProps {}

export interface OptionalSearchForPropertyFormProps {}

export type SearchForPropertyFormProps = RequiredSearchForPropertyFormProps &
  DefaultSearchForPropertyFormProps &
  OptionalSearchForPropertyFormProps &
  TestProps;

export type SearchForPropertyFormStyleProps =
  Required<DefaultSearchForPropertyFormProps>;
