import App from "./App";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import SelectProfile from "./SelectProfile";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "profile/:name",
        element: <Profile />,
    },
    {
        path: "profile",
        element: <SelectProfile />,
    },
];

export default routes;
