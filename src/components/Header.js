import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';

export default class Header extends React.Component {
  render() {
    return (
      <header className="site-header is-sticky"  >
        <Navbar />
        <Banner />
      </header>
    )
  }
}
