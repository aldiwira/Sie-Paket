import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/splash';
import Home from './screens/home';

const stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      setisFirst(false);
    }, 1000);
  });
  const [isFirst, setisFirst] = useState(true);
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        {isFirst ? <stack.Screen name="splash" component={Splash} /> : null}
        <stack.Screen name="home" component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
