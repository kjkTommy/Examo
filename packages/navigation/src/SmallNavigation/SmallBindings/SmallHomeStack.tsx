import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import Home from '../../screens/Home';

export default observer(function SmallHomeStack() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  );
});

const {Navigator, Screen, Group} = createStackNavigator();
