import React from "react";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import configureStore from "./src/state/store/configureStore";
import App from "./App";

const store = configureStore();

const ConnectedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

registerRootComponent(ConnectedApp);
