import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import store from "./store.ts";
import { deposit } from "./features/accounts/accountSlice.ts";

store.dispatch(deposit(300));
console.log(store.getState());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
