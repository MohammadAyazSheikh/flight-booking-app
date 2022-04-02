import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
import * as React from 'react';
import { Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/HomeScreen';
import Cart from '../screens/cartScreen';
import Test from '../screens/testScreen';
import Splash from '../screens/splashScreen/splashScreen';
import Login from '../screens/loginScreen/loginScreen';



function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Stack = createStackNavigator();



export default function RootNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'tomato',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}

      >
         <Stack.Screen name="Splash" component={Splash}
          options={{
            headerShown: false,

          }}
        />
        <Stack.Screen name="Login" component={Login}
          options={{
            headerShown: false,

          }}
        />
        <Stack.Screen name="Cart" component={Cart}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}