import Slider from '@react-native-community/slider';
import React from 'react';
import { View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import styles from './styles';

const TemperatureControl = ({onTempratureChange, temperature}) => {
  
  return (
      <View style={styles.wrapper}>
      <MaterialIcons name="severe-cold" size={24} color="blue" />
        <Slider
          style={[styles.slider, styles.boxWithShadow]}
          minimumValue={10}
          maximumValue={30}
          step={1}
          value={temperature}
          onValueChange={onTempratureChange}
          minimumTrackTintColor={getSliderColor()}
          maximumTrackTintColor="#D3D3D3"
          thumbTintColor={getSliderColor()}
          />
          <FontAwesome6 name="temperature-full" size={24} color="red" />
      </View>
  );
};

export default TemperatureControl;
