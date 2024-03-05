import React, {useState} from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../components/primaryButton';

const leftArrowIcon = require('../../assets/leftArrow-icon.png');

const days = [
  {initial: 'M', key: 'mon'},
  {initial: 'T', key: 'tue'},
  {initial: 'W', key: 'wed'},
  {initial: 'Th', key: 'thu'},
  {initial: 'F', key: 'fri'},
  {initial: 'S', key: 'sat'},
  {initial: 'Su', key: 'sun'},
];

const daySlots = [
  '8:00am - 10:00am',
  '10:00am - 1:00pm',
  '1:00pm - 4:00pm',
  '4:00pm - 7:00pm',
  '7:00pm - 10:00pm',
];

const CunditionalRender = ({day, isActive, slots, onPress}) => {
  if (isActive) {
    return (
      <Pressable
        onPress={onPress}
        style={{
          height: 36,
          width: 37,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#D5715B',
          backgroundColor: '#D5715B',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: '#FFFFFF',
          }}>
          {day.initial}
        </Text>
      </Pressable>
    );
  } else if (slots > 0) {
    return (
      <Pressable
        onPress={onPress}
        style={{
          height: 36,
          width: 37,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#261C124D',
          backgroundColor: '#eeedec',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 400,
            color: '#261C12',
          }}>
          {day.initial}
        </Text>
      </Pressable>
    );
  } else {
    return (
      <Pressable
        onPress={onPress}
        style={{
          height: 36,
          width: 37,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: '#261C124D',
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: '#261C124D',
          }}>
          {day.initial}
        </Text>
      </Pressable>
    );
  }
};

const Hours = () => {
  const navigation = useNavigation();
  const [activeDay, setActiveDay] = useState('mon');
  const [formData, setFormData] = useState({
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
    sun: [],
  });

  const onChangeHandler = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  const updateSlot = slot => {
    if (formData[activeDay].includes(slot)) {
      const updatedSlots = formData[activeDay].filter(s => s !== slot);
      onChangeHandler(activeDay, updatedSlots);
    } else {
      onChangeHandler(activeDay, [...formData[activeDay], slot]);
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
          Signup 4 of 4
        </Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: '#261C12',
            marginTop: 4,
          }}>
          Business Hours
        </Text>
      </View>

      <View style={{flex: 1, marginTop: 24, rowGap: 40}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 400,
            color: '#0000004D',
          }}>
          Choose the hours your farm is open for pickups. This will allow
          customers to order deliveries.
        </Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {days.map((day, index) => (
            <CunditionalRender
              key={index}
              day={day}
              isActive={day.key === activeDay}
              slots={formData[day.key].length}
              onPress={() => setActiveDay(day.key)}
            />
          ))}
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            rowGap: 12,
          }}>
          {daySlots.map((slot, index) => (
            <Pressable
              onPress={() => updateSlot(slot)}
              key={index}
              style={{
                height: 48,
                width: '48%',
                borderRadius: 8,
                backgroundColor: formData[activeDay].includes(slot)
                  ? '#F8C569'
                  : '#eeedec',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#261C12',
                }}>
                {slot}
              </Text>
            </Pressable>
          ))}
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
        <PrimaryButton
          label={'Signup'}
          width={'58%'}
          action={() => navigation.navigate('confirmation')}
        />
      </View>
    </View>
  );
};

export default Hours;
