import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout";
import {PostsPage, UsersPage} from "./pages";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'users'}/>
            },
            {
                path: 'users', element: <UsersPage/>
            },
            {
                path: 'posts', element: <PostsPage/>
            }
        ]
    }

]);
export {
    router
}