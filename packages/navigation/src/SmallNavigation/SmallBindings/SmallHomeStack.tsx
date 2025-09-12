import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import TestBinding from '../../CommonBindings/AuthBinding';

export default observer(function SmallHomeStack() {
  return (
    <Navigator
      initialRouteName="Root"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          flex: 1,
          backgroundColor: 'transparent',
        },
        ...TransitionPresets.DefaultTransition,
      }}
    >
      <Screen name="Root" component={TestBinding} />
    </Navigator>
  );
});

const {Navigator, Screen, Group} = createStackNavigator();
