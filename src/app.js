import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import Index from './pages/index';
import JobDetail from './pages/jobs/detail';

class Main extends React.Component {

  constructor(props) {
    super(props);
    let self = this;
    this.state = {
      route: (<Index changeRoute={this.changeRoute.bind(self)}/>),
    };
  }

  getRoute(name, args){
    return (
     <JobDetail 
      args={args} 
      changeRoute={this.changeRoute.bind(self)}
     />);
  }

  changeRoute(name, args){
    this.setState({
      route: this.getRoute(name, args),
    });
  }

  render() {
    let self = this;
    return (
     <MuiThemeProvider>
       {self.state.route}
     </MuiThemeProvider>
    );
  }
}

let main = document.getElementById('main');
ReactDOM.render( < Main / > , main);