import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import {ISetState} from "../../types/setStateType";

interface IProps{
    changTrigger:()=> void;
    setCarForUpdate:ISetState<ICar>
    carForUpdate:ICar
}
const CarForm:FC<IProps> = ({changTrigger, setCarForUpdate, carForUpdate}) => {
    const {reset, handleSubmit, register, setValue} = useForm<ICar>();

    useEffect(() => {
        if(carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate, setValue]);
    const save:SubmitHandler<ICar> = async (car) => {
        await carService.create(car)
        changTrigger()
        reset()
    };

    const update:SubmitHandler<ICar> = async (car) =>{
        await carService.updateById(carForUpdate.id, car)
        changTrigger()
        setCarForUpdate(null)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update:save)}>
            <input type={"text"} placeholder={'brand'} {...register('brand')}/>
            <input type={"text"} placeholder={'price'} {...register('price')}/>
            <input type={"text"} placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'update' : 'save'}</button>
        </form>
    );
};

export default CarForm;