import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingOverlay from '../components/loadingOverlay';

// pages
import Onboarding from './Onboarding/onboarding';
import Login from './Login/login';
import ForgotPassword from './Login/forgotPassword';
import OTP from './Login/otp';
import ResetPassword from './Login/resetPassword';
import Signup from './Signup/signup';
import FarmInfo from './Signup/farmInfo';
import Verification from './Signup/verification';
import Hours from './Signup/hours';
import Confirmation from './Signup/confirmation';
import Home from './MainApp/home';

const RootContainer = () => {
  const Stack = createNativeStackNavigator();
  const isLoading = useSelector(state => state.auth.loading);

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="onboarding" component={Onboarding} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="forgotPassword" component={ForgotPassword} />
          <Stack.Screen name="otp" component={OTP} />
          <Stack.Screen name="resetPassword" component={ResetPassword} />
          <Stack.Screen name="signup" component={Signup} />
          <Stack.Screen name="farmInfo" component={FarmInfo} />
          <Stack.Screen name="verification" component={Verification} />
          <Stack.Screen name="hours" component={Hours} />
          <Stack.Screen name="confirmation" component={Confirmation} />
          <Stack.Screen
            options={{
              title: 'Home',
              headerShown: true,
              headerBackVisible: false,
              headerTintColor: '#ffffff',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#D5715B',
              },
            }}
            name="home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {isLoading && <LoadingOverlay />}
    </View>
  );
};

export default RootContainer;
