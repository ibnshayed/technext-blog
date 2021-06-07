import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import PostContextProvider from "./contexts/PostContextProvider";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

export const contextProviders = [PostContextProvider];

const getAppWithContextProviders = () => {
  let result = <App />;
  contextProviders.forEach(
    (Provider) => (result = <Provider>{result}</Provider>)
  );

  return result;
};

ReactDOM.render(getAppWithContextProviders(), document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
