import React, { Component } from 'react';
import { remote } from 'electron';
import request from '../request';

import CircularProgress from 'material-ui/CircularProgress';

import {List, ListItem} from 'material-ui/List';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const goDetail = function(){
  alert(this.id);
};

const RightIcon = (id) => {
  let ctx = {};
  ctx.id = id;
  return (<IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="detail" onClick={goDetail.bind(ctx)}/>
          <MenuItem primaryText="edit" />
          <MenuItem primaryText="remove" />
        </IconMenu>); 
};

const style = {
  textAlign: 'center',
  marginTop: '20px'
};

class JobList extends Component {
  constructor() {
    super();
    this.state = {
      job: null
    };
  }

  componentDidMount() {
    let self = this;
    request('dailyjob').then((data) => {
      self.setState({
        job: data
      });
    });
  }

  renderItem(obj, idx) {
    return ( <ListItem key = {idx}
      rightIconButton={RightIcon(idx)}
      > 
      {obj.name}< /ListItem>
    );
  }
  
  render() {
    if (this.state.job) {
      return ( <List> {
        this.state.job.map(this.renderItem.bind(this))
        } < /List>);
    }
    return (<div style={style}><CircularProgress/></div>);
  }
}

export default JobList