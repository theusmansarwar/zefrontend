import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";  // ✅ Import HelmetProvider
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>  {/* ✅ Wrap your App with HelmetProvider */}
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
