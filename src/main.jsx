import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { SoundContextProvider } from "./context/SoundContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SoundContextProvider>
      <App />
    </SoundContextProvider>
  </React.StrictMode>
);
