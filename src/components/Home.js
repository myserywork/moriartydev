import React from 'react';

import Intro from './sections/Intro';
import Howto from './sections/Howto';
import Services from './sections/Services';
import Workflow from './sections/Workflow';
import Buy from './sections/Buy';
import Faq from './sections/Faq';
import Contact from './sections/Contact';
import Subscribe from './sections/Subscribe';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Intro />
        <Howto />
        <Services />
        <Workflow />
        <Buy />
        <Faq />
        <Contact />
        <Subscribe />
      </div>
    )
  }
}
