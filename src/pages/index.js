import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import JobList from '../components/TaskList';
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  render() {
    let self = this;
    return (
      <Tabs
        value={this.state.value}
      >
        <Tab label="Job List" value="a" >
          <div>
            <JobList clickRightICon={this.props.changeRoute.bind(self)}/>
          </div>
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

export default Index;