import React, { Component } from 'react';
import './App.css';

import { createMuiTheme , MuiThemeProvider } from '@material-ui/core'

import { connect } from "react-redux";
import fetchInvoice from "./actions/fetchInvoice_action";
import Header from "./components/component_header";
import Sidebar from './components/component_sidebar'
import InvoiceDetails from "./components/invoice_details";
const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});
class App extends Component {
  componentDidMount(){
    this.props.fetchInvoice();
  }
  render() {
    return (
      
        <div className="App root">
        <Header />
        <MuiThemeProvider theme={theme}>
          <Sidebar />
        </MuiThemeProvider>
        <InvoiceDetails />
        </div>
    );
  }
}

export default connect(null, {
  fetchInvoice 
})(App);
