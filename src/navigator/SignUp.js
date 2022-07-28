import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {useAuthContext} from "../contexts/AuthContext";
import HomeScreen from '../screens/HomeScreen';
 import OrderScreen from '../screens/OrderScreen';
 import Basket from '../screens/Basket';
 import DishDetailsScreen from '../screens/DishDetailsScreen'
 import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
 import { Foundation ,Ionicons,FontAwesome5} from '@expo/vector-icons';
 import OrderDetails from "../screens/OrderDetails"; 
 import SignInScreen from "../screens/SIgnInScreen/SignInScreen"
 import  SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import TermsOfServiceScreen from '../screens/TermsOfServiceScreen';
import ProfileScreen from "../screens/ProfileScreen";
import { Auth,Hub } from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { SignUp } from './SignUp';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <Stack.Screen name={"HomeTabs"} component={HomeTab} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;