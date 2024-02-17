import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {
}


const UserDetails: FC<IProps> = () => {
    return (
        <div>
            UserDetails
        </div>
    );
};

export {
    UserDetails
};