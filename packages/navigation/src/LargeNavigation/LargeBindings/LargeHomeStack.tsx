import {createStackNavigator} from '@react-navigation/stack';
import {observer} from 'mobx-react-lite';
import AuthBinding from '../../CommonBindings/AuthBinding';
import {View, Text} from 'react-native';

export default observer(function LargeHomeStack() {
  return (
    <Navigator
      initialRouteName="Root"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#000000'},
      }}
    >
      <Screen name="Root" component={AuthBinding} />
    </Navigator>
  );
});

const {Navigator, Screen, Group} = createStackNavigator();
