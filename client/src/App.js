import React, { Component } from 'react';
import './App.css';

import { createMuiTheme , MuiThemeProvider } from '@material-ui/core'

import Header from "./components/component_header";
import Sidebar from './components/component_sidebar'

const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
        <Header />
        <Sidebar />
        {/* <Footer /> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
