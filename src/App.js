import React, { Component } from 'react';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { red, lightBlue } from '@material-ui/core/colors'

import Routes from './routes'
import './CSS/general.css'

const theme = createMuiTheme({
  palette:{
    primary: {
      main: '#6C63FF'
    },
    secondary: {
      main: '#F9BC48'
    },
    third: {
      main: '#5AC3FF'
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"IBM Plex Sans"',
      'Roboto',
      'sans-serif'
    ].join(',')
  }
})




class App extends Component {
  render() {
    return (
      <div style={{height:'100%'}}>
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
