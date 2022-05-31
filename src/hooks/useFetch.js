import { useEffect, useState } from 'react'

export const useFetch = () => {

    const [load, setLoad] = useState(false);
    const [clima, setClima] = useState([]);
    const [ciudad, setCiudad] = useState('corrientes');

    useEffect(()=>{
        getClima();
    },[ciudad])
    
    const getClima = async ()=>{
        try{
           const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${ciudad}&lang=es&appid=8a5e9515a6583a0a93a8e614d848ffb5`);
           const data = await resp.json();
           setClima(data);

        }catch(error){
            console.log('ERROR');
        }
        setLoad(true);
    }
  return {clima, getClima, load, setCiudad};
}
