import React from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../components/primaryButton';

const Home = () => {
  const navigation = useNavigation();
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
      <PrimaryButton
        label={'Logout'}
        width={'60%'}
        action={() => navigation.navigate('login')}
      />
    </View>
  );
};

export default Home;
