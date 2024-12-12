import React from "react";
import ReactDOM from "react-dom/client";
import Final from "./Component/Final";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PlayerContextProvider } from "./Context/PlayerContext";

const router = createBrowserRouter([
  {
    path: "/*", 
    element: <Final />, 
  },
]);

const App = () => {
  return (
    <PlayerContextProvider> 
      <RouterProvider router={router} />
    </PlayerContextProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
