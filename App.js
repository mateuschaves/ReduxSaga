import React, { Component } from "react";

import { Router, Tabs, Scene, Stack } from "react-native-router-flux";

import { Provider } from "react-redux";

import store from "./src/store";

// Screens
import Login from "./src/screens/Login";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key={"root"}>
            <Scene key="login" component={Login} title="Login" initial />
          </Stack>
        </Router>
      </Provider>
    );
  }
}
