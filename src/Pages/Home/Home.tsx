import { PageContainer } from '../../App.styles';
import { Typography } from '../../Components/Typography';
import { TestProps } from '../../Config/Tests/Test.types';
import { SearchForPropertyForm } from '../../Features/SearchForPropertyForm';
import { HomeSearchFormContainer } from './Home.styles';

export const homeDefaults: Required<TestProps> = {
  testID: 'Home',
};

export const Home: React.FC = (): JSX.Element => {
  return (
    <PageContainer data-testid={homeDefaults.testID}>
      <Typography variant="h2">Where to next, User123?</Typography>

      <HomeSearchFormContainer>
        <SearchForPropertyForm />
      </HomeSearchFormContainer>
    </PageContainer>
  );
};
