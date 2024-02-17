import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {
}


const Users: FC<IProps> = () => {
    return (
        <div>
            Users
        </div>
    );
};

export {
    Users
};