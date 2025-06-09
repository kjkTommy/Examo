import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import HomeSmall from '../../screens/SmallScreens/Home';

export default observer(function SmallHomeStack() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={HomeSmall} />
    </Navigator>
  );
});

const {Navigator, Screen, Group} = createStackNavigator();
