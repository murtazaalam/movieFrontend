import React from 'react';
import {RoutesPath} from './routesPath';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {LoginScreen} from "../container/auth/LoginScreen";
import {MoviesScreen} from "../container/movies/Movies";

const ScreenStack = createStackNavigator();

const Routes = () => {
  
  return (
    <NavigationContainer>
        <ScreenStack.Navigator
            initialRouteName={RoutesPath.movies}
            screenOptions={{headerShown: false}}>
            <ScreenStack.Screen
                name={RoutesPath.movies}
                component={MoviesScreen}
            />
        </ScreenStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
