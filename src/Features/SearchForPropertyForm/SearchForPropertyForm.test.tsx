import {
  renderJestDomCreator,
  renderRTRCreator,
  screen,
} from '../../Config/Tests/GlobalSetup.config';
import {
  SearchForPropertyForm,
  searchForPropertyFormDefaults,
} from './SearchForPropertyForm';
import {
  RequiredSearchForPropertyFormProps,
  SearchForPropertyFormProps,
} from './SearchForPropertyForm.types';

describe('searchForPropertyForm component tests', () => {
  const requiredProps: RequiredSearchForPropertyFormProps = {};

  const setup = (props?: SearchForPropertyFormProps) => {
    const renderRTR = () =>
      renderRTRCreator<SearchForPropertyFormProps>(SearchForPropertyForm, {
        ...requiredProps,
        ...props,
      });
    const renderJestDom = () =>
      renderJestDomCreator<SearchForPropertyFormProps>(SearchForPropertyForm, {
        ...requiredProps,
        ...props,
      });

    return { renderRTR, renderJestDom };
  };

  describe('behavior tests', () => {
    it(`should render the component`, () => {
      expect.assertions(1);
      setup().renderJestDom();
      const testInstance = screen.getByTestId(
        searchForPropertyFormDefaults.testID
      );

      expect(testInstance).toBeTruthy();
    });
  });

  describe('style tests', () => {});

  describe('snapshot tests', () => {
    it(`should render correctly`, () => {
      expect.assertions(1);
      const generatedJson = setup().renderRTR().toJSON();

      expect(generatedJson).toMatchSnapshot();
    });
  });
});
