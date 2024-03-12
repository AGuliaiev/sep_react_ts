import {FC, PropsWithChildren} from "react";
import {ICar} from "../../interface";
import {useAppDispatch} from "../../hooks";
import {carActions} from "../../store";

interface IProps extends PropsWithChildren {
    car: ICar
}


const Car: FC<IProps> = ({car}) => {
    const {id, year, price, brand} = car;

    const dispatch = useAppDispatch();


    return (
        <div>
            <div>id: {id}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <div>brande: {brand}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={()=>dispatch(carActions.deleteById({id}))}>delete</button>
        </div>
    );
};

export {
    Car
};