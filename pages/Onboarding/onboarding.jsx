import React, {useEffect, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PrimaryButton from '../../components/primaryButton';

const bg1 = require('../../assets/bg1.png');
const bg2 = require('../../assets/bg2.png');
const bg3 = require('../../assets/bg3.png');

const layouts = [
  {
    index: 0,
    title: 'Quality',
    description:
      'Sell your farm fresh products directly to consumers, cutting out the middleman and reducing emissions of the global supply chain.',
    backgroundColor: '#5EA25F',
    backgroundImg: bg1,
  },
  {
    index: 1,
    title: 'Convenient',
    description:
      'Our team of delivery drivers will make sure your orders are picked up on time and promptly delivered to your customers.',
    backgroundColor: '#D5715B',
    backgroundImg: bg2,
  },
  {
    index: 2,
    title: 'Local',
    description:
      'We love the earth and know you do too! Join us in reducing our local carbon footprint one order at a time.',
    backgroundColor: '#F8C569',
    backgroundImg: bg3,
  },
];

const Onboarding = () => {
  const navigation = useNavigation();
  const [layout, setLayout] = useState(layouts[0]);

  useEffect(() => {
    setTimeout(() => {
      switch (layout.index) {
        case 0:
          setLayout(layouts[1]);
          break;
        case 1:
          setLayout(layouts[2]);
          break;
        case 2:
          setLayout(layouts[0]);
          break;
        default:
          break;
      }
    }, 4000);
  }, [layout]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: layout.backgroundColor,
      }}>
      <Image
        source={layout.backgroundImg}
        style={{
          width: '100%',
          height: '48%',
          objectFit: 'fill',
          marginTop: '1%',
          marginBottom: '1%',
        }}
      />
      <View
        style={{
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          padding: 20,
          height: '50%',
          width: '100%',
          borderTopLeftRadius: 49,
          borderTopRightRadius: 49,
        }}>
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: '#000000',
            }}>
            {layout.title}
          </Text>
        </View>
        <View style={{width: '83%'}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 400,
              color: '#261C12',
              textAlign: 'center',
            }}>
            {layout.description}
          </Text>
        </View>
        <View style={{flexDirection: 'row', columnGap: 8}}>
          {layouts.map((item, index) => (
            <Pressable
              key={index}
              // onPress={() => setLayout(item)}
              style={{
                backgroundColor: '#261C12',
                height: 7,
                width: item.index === layout.index ? 16.33 : 7,
                borderRadius: 46,
              }}></Pressable>
          ))}
        </View>
        <PrimaryButton
          label={'Join the movement'}
          color={layout.backgroundColor}
          action={() => navigation.navigate('signup')}
          width={'60%'}
          height={60}
        />
        <Pressable onPress={() => navigation.navigate('login')}>
          <Text
            style={{
              fontSize: 14,
              color: '#261C12',
              textDecorationLine: 'underline',
              fontWeight: 500,
            }}>
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Onboarding;
