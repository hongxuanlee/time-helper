import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import JobList from './components/TaskList';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const Content = () => (
    <div>
        <JobList />
    </div>
);

class MainTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange(value){
    this.setState({
      value: value,
    });
  }

  render() {
    let self = this;
    return (
      <Tabs
        value={this.state.value}
        onChange={this.handleChange.bind(self)}
      >
        <Tab label="Job List" value="a" >
           <Content />
        </Tab>
        <Tab label="Task List" value="b">
          <div>
            <h2 style={styles.headline}>Controllable Tab B</h2>
          </div>
        </Tab>
      </Tabs>
    );
  }
}

const Main = () => (
    <MuiThemeProvider>
        <MainTab />
    </MuiThemeProvider>
);

let main = document.getElementById('main');
ReactDOM.render( < Main / > , main);