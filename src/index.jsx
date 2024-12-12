import React from "react";
import ReactDOM from "react-dom/client";
import Final from "./Component/Final";
import { HashRouter, Route, Routes } from "react-router-dom";
import { PlayerContextProvider } from "./Context/PlayerContext";

const App = () => {
  return (
    <PlayerContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/*" element={<Final />} />
        </Routes>
      </HashRouter>
    </PlayerContextProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
