import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TemperatureControl } from '../../Components';
import styles from './styles';
styles

const TemperatureScreen = () => {
  const [temperature, setTemperature] = useState(20); // Default temperature: 20°C

  return (
    <View style={styles.screen}>
      <View style={styles.container}>

        <Text style={styles.title}>Set Temperature</Text>
        <Text style={styles.temperatureDisplay}>{temperature}°C</Text>
       
        <TemperatureControl temperature={temperature} onTempratureChange={setTemperature} />
      </View>
      
    </View>
  );
};

export default TemperatureScreen;
