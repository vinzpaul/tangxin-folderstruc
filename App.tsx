import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import HomeScreen from "./screens/HomeScreen";
import ModelsScreen from "./screens/ModelsScreen";

//Redux
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

//Sentry
import * as Sentry from '@sentry/react-native';
Sentry.init({
  dsn: 'https://ced0ed0ece494a849b2dad58a9f5271c@o4504490963763200.ingest.sentry.io/4504540861497344',
  tracesSampleRate: 1.0,
  enableNative: false,
})

//ENV
import { TESTING_ENV } from '@env';

type Props = {}
const App: React.FC = (props: Props) => {

  //Sentry
  // Sentry.captureMessage('Hello Test')
  // Sentry.captureEvent({
  //   message: 'test',
  // })

  //Protobuf
  const auth = require('./i18n/auth_pb');
  const authObj = new auth.User();
  authObj.setEmail('1bit@gmail.com');
  authObj.setPassword('Pass123');

  //Serializing the data
  const serializedData = authObj.serializeBinary();
  console.log(serializedData)
  //Deserializing the data
  const desData = auth.User.deserializeBinary(serializedData);
  console.log(desData)
  //Convert to JSON
  const jsonData = desData.toObject();
  console.log(jsonData)

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Models" component={ModelsScreen} />
        </Stack.Navigator>
        <Text>{TESTING_ENV}</Text>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Sentry.wrap(App);
