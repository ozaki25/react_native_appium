import { StackNavigator } from 'react-navigation';
import Sample1 from '../components/Sample1';
import Sample2 from '../components/Sample2';
import Sample3 from '../components/Sample3';

const AppNavigator = StackNavigator({
  Sample1: { screen: Sample1 },
  Sample2: { screen: Sample2 },
  Sample3: { screen: Sample3 },
});

export default AppNavigator;
