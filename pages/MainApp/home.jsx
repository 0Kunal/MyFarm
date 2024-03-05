import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import PrimaryButton from '../../components/primaryButton';

// slice reducer
import {logout} from '../../slice/auth';

const Home = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onLogout = () => {
    dispatch(logout());
    navigation.navigate('login');
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 20,
      }}>
      <Text style={{fontSize: 32, fontWeight: 700, color: '#261C12'}}>
        You are logged in!
      </Text>
      <PrimaryButton label={'Logout'} width={'60%'} action={onLogout} />
    </View>
  );
};

export default Home;
