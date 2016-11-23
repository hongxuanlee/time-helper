import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TaskList from './components/TaskList';
import AppBar from 'material-ui/AppBar';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Content = () => (
    <div>
        <AppBar title="task list" />
        <TaskList />
    </div>
);

const Main = () => (
    <MuiThemeProvider>
        <Content />
    </MuiThemeProvider>
);

let main = document.getElementById('main');
ReactDOM.render( < Main / > , main);