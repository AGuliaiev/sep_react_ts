import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {ICar} from "../../interface";
import {carService} from "../../services";
import {AxiosError} from "axios";

interface IState {
    cars: ICar[],
    carForUpdate: ICar,
    trigger: boolean
}

const initialState: IState = {
    cars: [],
    carForUpdate: null,
    trigger: null
};

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const create = createAsyncThunk<void, { car:ICar }>(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            await carService.create(car)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const update = createAsyncThunk<ICar[], {id: number, car:ICar }>(
    'carSlice/update',
    async ({id, car}, {rejectWithValue}) => {
        try {
            await carService.updateById(id, car)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const deleteById = createAsyncThunk<void, {id:number}>(
    'carSlice/delete',
    async ({id}, {rejectWithValue})=>{
        try {
            await carService.deleteById(id)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }

    }
    )

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate:(state, action)=>{
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addMatcher(isFulfilled(create), state => {
                state.trigger = !state.trigger
            })
            .addMatcher(isFulfilled(update), state => {
                state.trigger = !state.trigger
            })
            .addMatcher(isFulfilled(deleteById), state => {
                state.trigger = !state.trigger
            })
})

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteById
}

export {
    carReducer,
    carActions
}