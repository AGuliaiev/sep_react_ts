import {FC, PropsWithChildren, useState} from "react";
import {IUser} from "../../interfaces";

interface IProps extends PropsWithChildren {
    user: IUser
}


const User: FC<IProps> = ({user}) => {
    const {id, name} = user;



    const [, set] = useState()

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button>Details</button>
        </div>
    );
}

export {
    User
};