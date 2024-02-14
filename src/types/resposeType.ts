import {AxiosResponse} from "axios";
import {ICar} from "../interfaces/carInterface";

type IRes<T> = Promise<AxiosResponse<ICar[]>>

export type{
    IRes
}