import Calendar from 'react-calendar';
import { BiSolidPlaneAlt, BiCalendarAlt } from 'react-icons/bi';
import { BsFillPeopleFill, BsFillHousesFill } from 'react-icons/bs';
import { FaChildren } from 'react-icons/fa6';

import { useTheme } from 'styled-components';

import { TextInput } from '../../Components/TextInput';
import { TestProps } from '../../Config/Tests/Test.types';
import {
  HomeSearchFormContainer,
  HomeRowContainer,
  HomeButton,
} from '../../Pages/Home/Home.styles';
import { iconSizes } from '../../Theme/Types';
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

  return (
    <HomeSearchFormContainer data-testid={testID}>
      <TextInput
        label="Place"
        leftSlot={BiSolidPlaneAlt}
        onChange={() => {}}
        placeholder="Where do you go?"
        value=""
      />

      <HomeRowContainer>
        <BiCalendarAlt
          color={theme.colors.background.default.lightest}
          size={iconSizes.md}
        />
        <Calendar className="full" minDate={new Date()} selectRange />
      </HomeRowContainer>

      <TextInput
        label="Adults"
        leftSlot={BsFillPeopleFill}
        min="1"
        onChange={() => {}}
        type="number"
        value=""
      />

      <TextInput
        label="Children"
        leftSlot={FaChildren}
        min="0"
        onChange={() => {}}
        type="number"
        value=""
      />

      <TextInput
        label="Rooms"
        leftSlot={BsFillHousesFill}
        min="1"
        onChange={() => {}}
        type="number"
        value=""
      />

      <HomeButton onClick={() => {}}>SEARCH</HomeButton>
    </HomeSearchFormContainer>
  );
};
