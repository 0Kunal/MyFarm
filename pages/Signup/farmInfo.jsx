import React, {useState} from 'react';
import {Text, View, Pressable, Image, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import PrimaryButton from '../../components/primaryButton';
import PrimaryInput from '../../components/primaryInput';
import PrimaryDropdown from '../../components/primaryDropdown';

const tagIcon = require('../../assets/tag-icon.png');
const smilyIcon = require('../../assets/smily-icon.png');
const homeIcon = require('../../assets/home-icon.png');
const locationIcon = require('../../assets/location-icon.png');
const leftArrowIcon = require('../../assets/leftArrow-icon.png');

// action
import {saveData} from '../../slice/auth';

const stateOptions = [
  {label: 'New York', value: 'New York'},
  {label: 'Andhra Pradesh', value: 'Andhra Pradesh'},
  {label: 'Arunachal Pradesh', value: 'Arunachal Pradesh'},
  {label: 'Assam', value: 'Assam'},
  {label: 'Bihar', value: 'Bihar'},
  {label: 'Chhattisgarh', value: 'Chhattisgarh'},
  {label: 'Goa', value: 'Goa'},
  {label: 'Gujarat', value: 'Gujarat'},
  {label: 'Haryana', value: 'Haryana'},
  {label: 'Himachal Pradesh', value: 'Himachal Pradesh'},
  {label: 'Jharkhand', value: 'Jharkhand'},
  {label: 'Karnataka', value: 'Karnataka'},
  {label: 'Kerala', value: 'Kerala'},
  {label: 'Madhya Pradesh', value: 'Madhya Pradesh'},
  {label: 'Maharashtra', value: 'Maharashtra'},
  {label: 'Manipur', value: 'Manipur'},
  {label: 'Meghalaya', value: 'Meghalaya'},
  {label: 'Mizoram', value: 'Mizoram'},
  {label: 'Nagaland', value: 'Nagaland'},
  {label: 'Odisha', value: 'Odisha'},
  {label: 'Punjab', value: 'Punjab'},
  {label: 'Rajasthan', value: 'Rajasthan'},
  {label: 'Sikkim', value: 'Sikkim'},
  {label: 'Tamil Nadu', value: 'Tamil Nadu'},
  {label: 'Telangana', value: 'Telangana'},
  {label: 'Tripura', value: 'Tripura'},
  {label: 'Uttar Pradesh', value: 'Uttar Pradesh'},
  {label: 'Uttarakhand', value: 'Uttarakhand'},
  {label: 'West Bengal', value: 'West Bengal'},
];
const FarmInfo = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    businessName: 'Dairy Farm',
    informalName: 'London Dairy',
    streetAddress: '3663 Marshville Road',
    city: 'Poughkeepsie',
    state: 'New York',
    zipcode: '12601',
  });

  const onChangeHandler = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  const onSubmit = () => {
    try {
      const dataModal = {
        business_name: formData.businessName,
        informal_name: formData.informalName,
        address: formData.streetAddress,
        city: formData.city,
        state: formData.state,
        zip_code: formData.zipcode,
      };
      dispatch(saveData(dataModal));
      navigation.navigate('verification');
    } catch (error) {
      Alert.alert('Internal Error', error.message);
    }
  };

  return (
    <View style={{flex: 1, padding: 30, justifyContent: 'space-between'}}>
      <View style={{marginTop: 6}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 400,
            color: '#000000',
          }}>
          FarmerEats
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: '#0000004D',
            marginTop: 32,
          }}>
          Signup 2 of 4
        </Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: '#261C12',
            marginTop: 4,
          }}>
          Farm Info
        </Text>
      </View>

      <View style={{flex: 1, marginTop: 40, rowGap: 24}}>
        <PrimaryInput
          value={formData.businessName}
          onChange={value => onChangeHandler('businessName', value)}
          placeholder={'Business Name'}
          autoComplete={'organization'}
          startIcon={tagIcon}
        />
        <PrimaryInput
          value={formData.informalName}
          onChange={value => onChangeHandler('informalName', value)}
          placeholder={'Informal Name'}
          autoComplete={'additional-name'}
          startIcon={smilyIcon}
        />
        <PrimaryInput
          value={formData.streetAddress}
          onChange={value => onChangeHandler('streetAddress', value)}
          placeholder={'Street Address'}
          autoComplete={'street-address'}
          startIcon={homeIcon}
        />
        <PrimaryInput
          value={formData.city}
          onChange={value => onChangeHandler('city', value)}
          placeholder={'City'}
          autoComplete={'country'}
          startIcon={locationIcon}
        />
        <View style={{flexDirection: 'row', columnGap: 10}}>
          <View style={{width: '32%'}}>
            <PrimaryDropdown
              value={formData.state}
              onChange={item => onChangeHandler('state', item.value)}
              options={stateOptions}
              placeholder={'State'}
            />
          </View>

          <View style={{flex: 1}}>
            <PrimaryInput
              value={formData.zipcode}
              onChange={value => onChangeHandler('zipcode', value)}
              placeholder={'Enter Zipcode'}
              autoComplete={'postal-code'}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          paddingVertical: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={leftArrowIcon} />
        </Pressable>
        <PrimaryButton label={'Continue'} width={'58%'} action={onSubmit} />
      </View>
    </View>
  );
};

export default FarmInfo;
