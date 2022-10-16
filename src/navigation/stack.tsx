import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';

import {ContactList} from '../screens';

const Stack = createNativeStackNavigator();

const Test = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'brown'}}>Test</Text>
    </View>
  );
};

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ContactList" component={Test} />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default RootNavigator;
