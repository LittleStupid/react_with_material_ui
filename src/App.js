import React from 'react';
import ReactDOM from 'react-dom';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import MyTitleBar from './MyTitleBar'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <MyTitleBar />
  </MuiThemeProvider>
);

export default App;
