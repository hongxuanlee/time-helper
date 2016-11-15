import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import {
  remote
} from 'electron';
import request from './request';

class Main extends Component {
  constructor(props) {
    super();
    this.state = {
      job: null
    }
  }

  componentDidMount() {
    let self = this;
    request('dailyjob').then((data) => {
      self.setState({
        job: data
      });
    });
  }

  renderList(obj) {
      return ( < li > {
          obj.name
        } - {
          obj.typeName
        } < /li>)
      }

  render() {
      if (this.state.job) {
          return ( < ul > {
              this.state.job.map(this.renderList.bind(this))
            } </ul>)
          }
          return <div > loading... < /div>
      }
}

let main = document.getElementById('main');
ReactDOM.render(< Main / > , main);
