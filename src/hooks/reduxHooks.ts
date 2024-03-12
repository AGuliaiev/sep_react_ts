import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../type/reduxType";

const useAppSelector:TypedUseSelectorHook<RootState> = useSelector

const useAppDispatch = () => useDispatch<AppDispatch>();

export {
    useAppDispatch,
    useAppSelector
}