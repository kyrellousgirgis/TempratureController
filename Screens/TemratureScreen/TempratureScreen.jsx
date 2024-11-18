import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { TemperatureControl } from '../../Components';
import styles from './styles';
import useFetch from '../../Hooks/UseFetch';
import { fetchDegrees } from '../../Services';
import { generateRandomNumber } from '../../Utils/utils';
import axios from 'axios';


const TemperatureScreen = () => {
  const [randomId,setRandomId] = useState()
  const cachedFn = useCallback((async ()=>{ return fetchDegrees(randomId)}), [randomId])
  const [temperature, setTemperature] = useState(20);
  const [temperatureMeasure,setTemperatureMeasure] = useState(20)
  const {data,loading,error} = useFetch(randomId && cachedFn)
  
  useEffect(()=>{
    data?.degree && setTemperatureMeasure(data.degree)
    setTimeout(()=>{
      setRandomId(generateRandomNumber(1,21))
    },5000)
  },[randomId])



  return (
    <View style={styles.screen}>
      <View style={styles.container}>

        <Text style={styles.title}>Temperature Updates</Text>
        <Text style={styles.temperatureDisplay}>{temperatureMeasure}°C</Text>
       
        <TemperatureControl temperature={temperatureMeasure} onTempratureChange={setTemperature} />
        <Text style={styles.title}>Set Temperature</Text>

        <Text style={styles.temperatureDisplay}>{temperature}°C</Text>
        <TemperatureControl temperature={temperature} onTempratureChange={setTemperature} />
      </View>
      
    </View>
  );
};

export default TemperatureScreen;
