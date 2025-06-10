import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import AuthBinding from '../../CommonBindings/AuthBinding';

export default observer(function SmallHomeStack() {
  return (
    <Navigator
      initialRouteName="Root"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Root" component={AuthBinding} />
    </Navigator>
  );
});

const {Navigator, Screen, Group} = createStackNavigator();
