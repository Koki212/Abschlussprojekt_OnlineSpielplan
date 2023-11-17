import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewCompetition from "./NewCompetition.jsx";
import SearchCompetition from "./SearchCompetition.jsx";
import Competition from "./Competition.jsx";
import AddTeams from "./AddTeams.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/newcompetition",
        element: <NewCompetition />,
    },
    {
        path: "/:competitionId/addteams",
        element: <AddTeams />,
    },
    {
        path: "/searchcompetition",
        element: <SearchCompetition />,
    },
    {
        path: "/competition/:competitionId/:competitionName",
        element: <Competition />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
