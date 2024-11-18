import React, { useCallback, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { TemperatureControl } from '../../Components';
import styles from './styles';
import useFetch from '../../Hooks/UseFetch';
import { fetchDegrees } from '../../Services';
import { generateRandomNumber } from '../../Utils/utils';


const TemperatureScreen = () => {
  const [randomId,setRandomId] = useState()
  const cachedFn = useCallback((async ()=>{ return fetchDegrees(randomId)}), [randomId])
  const [temperature, setTemperature] = useState(20);
  const [temperatureMeasure,setTemperatureMeasure] = useState(20)
  
  const onSuccess = (data)=>{
    setTemperatureMeasure(data?.degree)
  }
  const {data,loading,error} = useFetch(randomId && cachedFn, onSuccess)
  
  useEffect(()=>{
   const intervalID = setInterval(()=>{
      setRandomId(generateRandomNumber(1,21))
    },5000)
    return ()=>{
       clearInterval(intervalID)
    }
  },[])



  return (
    <View style={styles.screen}>
      <View style={styles.container}>
       {/*section of getting visual updates from the Mock API*/}

        <Text style={styles.title}>Temperature Updates</Text>
        <Text style={styles.temperatureDisplay}>{temperatureMeasure}°C</Text>
       
        <TemperatureControl temperature={temperatureMeasure} onTempratureChange={setTemperature} />
       
       {/*section of setting temperature of the room*/}
        <Text style={styles.title}>Set Temperature</Text>

        <Text style={styles.temperatureDisplay}>{temperature}°C</Text>
        <TemperatureControl temperature={temperature} onTempratureChange={setTemperature} />
      </View>
      
    </View>
  );
};

export default TemperatureScreen;
