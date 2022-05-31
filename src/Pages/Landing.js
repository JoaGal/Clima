import React from 'react';
import { useFetch } from '../hooks/useFetch';
import './Landing.css';

export const Landing = () => {

    const { setCiudad, clima, load } = useFetch();

    const handleClickCorrientes = () => {
        setCiudad('corrientes')
    }
    const handleClickMendoza = () => {
        setCiudad('mendoza')
    }
    const handleClickNeuquen = () => {
        setCiudad('neuquen');
    }
    const handleClickMisiones = () => {
        setCiudad('misiones')
    }
    const handleClickSalta = () => {
        setCiudad('salta')
    }
    console.log(clima)
    return (
        <>
            <ul className='flex mt-6 justify-center text-cyan-600 text-2xl '>
                <li onClick={handleClickCorrientes} className='m-16 cursor-pointer bg-slate-900 p-4 rounded-md shadow-xl hover:bg-cyan-200 shadow-md  shadow-white'>Corrientes</li>
                <li onClick={handleClickMendoza} className='m-16 cursor-pointer bg-slate-900 p-4 rounded-md shadow-xl hover:bg-cyan-200 shadow-md shadow-white'>Mendoza</li>
                <li onClick={handleClickNeuquen} className='m-16 cursor-pointer bg-slate-900 p-4 rounded-md shadow-xl hover:bg-cyan-200 shadow-md  shadow-white'>Neuquen</li>
                <li onClick={handleClickMisiones} className='m-16 cursor-pointer bg-slate-900 p-4 rounded-md shadow-xl hover:bg-cyan-200 shadow-md  shadow-white' >Misiones</li>
                <li onClick={handleClickSalta} className='m-16 cursor-pointer bg-slate-900 p-4 rounded-md shadow-xl hover:bg-cyan-200 shadow-md  shadow-white'>Salta</li>
            </ul>
            {load === true ? (
                <>
                    <p className='text-4xl m-4 ml-20 text-cyan-600'>Clima: {clima.city.name}</p>
                    <div className='grid grid-cols-8 m-4'>
                        {clima.list.map((props, index) => {
                            return (
                                <div className={`${"a" + index}`}>
                                <div key={props.dt} className='w-52 mt-8 text-center shadow-md shadow-white rounded-md bg-slate-900 text-cyan-600'> 
                                    <p className='font-semibold font-sans text-2xl text-white'>{(props.dt_txt).slice(8, 10) + "-" + (props.dt_txt).slice(5, 7)}</p>
                                    <img className=' m-auto' src={`http://openweathermap.org/img/wn/${props.weather[0]?.icon}.png`} />
                                    <p className='font-semibold font-sans text-xl'>{(props.dt_txt).slice(11, 16) + "hs"}</p>
                                    <div className='flex justify-center '>
                                        <p className='font-semibold font-sans'>{props.main.temp}°C</p>
                                        <p className='font-semibold font-sans ml-2 mr-2'>↑{props.main.temp_max}°C</p>
                                        <p className='font-semibold font-sans'>↓{props.main.temp_min}°C</p>
                                    </div>
                                    <p className='m-auto font-semibold font-sans'>Humedad: {props.main.humidity}%</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            ) : null}

        </>
    )
}
