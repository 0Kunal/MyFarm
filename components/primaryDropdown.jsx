import React, {useState} from 'react';
import {Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const dropdownIcon = require('../assets/dropdown-icon.png');

const PrimaryDropdown = ({value, onChange, options, placeholder}) => {
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      placeholder={placeholder}
      style={{
        backgroundColor: '#e7e6e4',
        borderColor: '#e7e6e4',
        height: 48,
        borderRadius: 8,
      }}
      dropDownContainerStyle={{
        borderWidth: 2,
        borderColor: '#e7e6e4',
      }}
      ArrowDownIconComponent={() => <Image source={dropdownIcon} />}
      ArrowUpIconComponent={() => (
        <Image
          source={dropdownIcon}
          style={{
            transform: [{rotate: '180deg'}],
          }}
        />
      )}
      open={open}
      value={value}
      items={options}
      theme="LIGHT"
      setOpen={setOpen}
      onSelectItem={onChange}
    />
  );
};

export default PrimaryDropdown;
