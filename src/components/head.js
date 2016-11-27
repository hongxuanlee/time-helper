import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';

class Header extends Component {
  constructor() {
    super();
  }
  
  render() {
    if (! this.props.title) {
      return;
    }
    let title = this.props.title;
    return ( <AppBar
      title= {title}
      iconClassNameRight="muidocs-icon-navigation-expand-more"
  />);
  }
}

export default Header;