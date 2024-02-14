import React, {useEffect, useState} from 'react';
import CarForm from "./CarForm";
import Cars from "./Cars";
import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";

const CarContainer = () => {
    const [cars, setCars] = useState<ICar[]>([])
    const [trigger, setTrigger] = useState<boolean>(null)
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null)

    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))
    }, [trigger]);
    
    const changTrigger = () => {
        setTrigger(prevState=>!prevState)
    }
    
    return (
        <div>
            <CarForm changTrigger={changTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} changTrigger={changTrigger}/>
        </div>
    );
};

export default CarContainer;