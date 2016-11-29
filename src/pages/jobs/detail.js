import React from 'react';
import Head from '../../components/head';
class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  render() {
    return (
      <div>
      <Head title="detail"/>
      <div> detail</div>
      </div>
    );
  }
}

export default Detail;
