import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../store";
import {ICar} from "../../interface";
import {useEffect} from "react";

const CarForm = () => {
    const {reset, register, handleSubmit, setValue} = useForm<ICar>();
    const {carForUpdate} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();


    useEffect(() => {
        if (carForUpdate){
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue])

    const save: SubmitHandler<ICar> = (car) => {
        dispatch(carActions.create({car}))
        reset()
    };

    const update: SubmitHandler<ICar> = (car) => {
        dispatch(carActions.update({id: carForUpdate.id, car}))
        reset()
        dispatch(carActions.setCarForUpdate(null))
    }


    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate?'update':'save'}</button>
        </form>
    );
};

export {CarForm};