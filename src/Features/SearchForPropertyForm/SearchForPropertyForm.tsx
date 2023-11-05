import { useEffect } from 'react';
import Calendar from 'react-calendar';
import { useForm } from 'react-hook-form';
import { BiSolidPlaneAlt, BiCalendarAlt } from 'react-icons/bi';
import { BsFillPeopleFill, BsFillHousesFill } from 'react-icons/bs';
import { FaChildren } from 'react-icons/fa6';

import { yupResolver } from '@hookform/resolvers/yup';
import { useTheme } from 'styled-components';

import { TextInput } from '../../Components/TextInput';
import { TestProps } from '../../Config/Tests/Test.types';
import { iconSizes } from '../../Theme/Types';
import { SearchForPropertyFormModel } from './SearchForPropertyForm.model';
import {
  SearchForPropertyFormSchema,
  searchForPropertyFormDefaultValues,
} from './SearchForPropertyForm.schema';
import {
  StyledSearchForPropertyForm,
  SearchForPropertyRow,
  SearchForPropertyButton,
} from './SearchForPropertyForm.styles';
import {
  SearchForPropertyFormProps,
  DefaultSearchForPropertyFormProps,
} from './SearchForPropertyForm.types';

export const searchForPropertyFormDefaults: Required<DefaultSearchForPropertyFormProps> &
  Required<TestProps> = {
  testID: 'SearchForPropertyForm',
};

export const SearchForPropertyForm: React.FC<SearchForPropertyFormProps> = (
  props
): JSX.Element => {
  const { testID = searchForPropertyFormDefaults.testID } = props;
  const theme = useTheme();

  const { register, handleSubmit, formState, reset, clearErrors, setFocus } =
    useForm({
      mode: 'onSubmit',
      reValidateMode: 'onChange',
      defaultValues: searchForPropertyFormDefaultValues,
      resolver: yupResolver<SearchForPropertyFormModel>(
        SearchForPropertyFormSchema
      ),
    });
  const { errors, isSubmitting } = formState;

  const handleSubmitForm = (data: SearchForPropertyFormModel) => {
    // eslint-disable-next-line no-console
    console.log(data);
    reset(undefined, { keepDefaultValues: true });
    setFocus('place');
    clearErrors();
  };

  useEffect(() => {
    setFocus('place');
  }, [setFocus]);

  // const handleTextChange = ()

  return (
    <StyledSearchForPropertyForm
      data-testid={testID}
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <TextInput
        {...register('place')}
        label="Place"
        leftSlot={BiSolidPlaneAlt}
        onChange={() => {}}
        placeholder="Where do you go?"
        value=""
      />

      <SearchForPropertyRow>
        <BiCalendarAlt
          color={theme.colors.background.default.lightest}
          size={iconSizes.md}
        />
        <Calendar
          {...register('dateRange')}
          className="full"
          minDate={new Date()}
          onChange={() => {}}
          selectRange
        />
      </SearchForPropertyRow>

      <TextInput
        {...register('adults')}
        label="Adults"
        leftSlot={BsFillPeopleFill}
        min="1"
        onChange={() => {}}
        type="number"
        value=""
      />

      <TextInput
        {...register('children')}
        label="Children"
        leftSlot={FaChildren}
        min="0"
        onChange={() => {}}
        type="number"
        value=""
      />

      <TextInput
        {...register('rooms')}
        label="Rooms"
        leftSlot={BsFillHousesFill}
        min="1"
        onChange={() => {}}
        type="number"
        value=""
      />

      {JSON.stringify(errors)}

      <SearchForPropertyButton disabled={isSubmitting} type="submit">
        SEARCH
      </SearchForPropertyButton>
    </StyledSearchForPropertyForm>
  );
};
