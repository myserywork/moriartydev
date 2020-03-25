import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

export default class SimpleHeader extends React.Component {
  render() {
    return (
      <header className="site-header is-sticky"  >
        <Navbar />
        <div id="header" className="banner banner-curb banner-particle d-flex align-items-center" style={{minHeight: '0px'}}></div>
      </header>
    )
  }
}
