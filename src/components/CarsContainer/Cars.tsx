import React, {FC} from 'react';

import {ICar} from "../../interfaces/carInterface";
import Car from "./Car";
import {ISetState} from "../../types/setStateType";


interface IProps {
    cars: ICar[]
    setCarForUpdate:ISetState<ICar>
    changTrigger:()=>void
}
const Cars:FC<IProps> = ({cars, setCarForUpdate, changTrigger}) => {
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} changTrigger={changTrigger}/>)}
        </div>
    );
};

export default Cars;