import { PageContainer } from '../../App.styles';
import { Typography } from '../../Components/Typography';
import { TestProps } from '../../Config/Tests/Test.types';

export const availablePropertiesDefaults: Required<TestProps> = {
  testID: 'AvailableProperties',
};

export const AvailableProperties: React.FC = (): JSX.Element => {
  return (
    <PageContainer data-testid={availablePropertiesDefaults.testID}>
      <Typography>AvailableProperties test</Typography>
    </PageContainer>
  );
};
