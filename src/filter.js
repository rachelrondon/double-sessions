import React, { useState } from 'react';
import LandingPage from './landingPage.js';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'all'
    }
  }

  render() {
    return (
      <section className="filter-container">
        <button className="filter">Flow</button>
        <button className="filter">Sculpt</button>
        <button className="filter">Restorative</button>
      </section>
    )
  }
}
export default Filter;
