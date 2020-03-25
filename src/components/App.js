import React from 'react';
import Header from './Header';
import Intro from './sections/Intro';
import Howto from './sections/Howto';
import Services from './sections/Services';
import Workflow from './sections/Workflow';
import Buy from './sections/Buy';
import Faq from './sections/Faq';
import Contact from './sections/Contact';
import Subscribe from './sections/Subscribe';
import Footer from './sections/Footer';



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      titulo: 'Live do Ricardo'
    }
  }

  render() {
    return (
      <main>
        <Header />
        <Intro />
        <Howto />
        <Services />
        <Workflow />
        <Buy />
        <Faq />
        <Contact />
        <Subscribe />
        <Footer />
      </main>
    )
  }
}
