import { PageContainer } from '../../App.styles';
import { Typography } from '../../Components/Typography';
import { TestProps } from '../../Config/Tests/Test.types';

export const myBookingsDefaults: Required<TestProps> = {
  testID: 'MyBookings',
};

export const MyBookings: React.FC = (): JSX.Element => {
  return (
    <PageContainer data-testid={myBookingsDefaults.testID}>
      <Typography>MyBookings test</Typography>
    </PageContainer>
  );
};
