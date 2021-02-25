import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './landingPage.js';
import Filter from './filter.js';
import YogaOne from './images/yoga-one.jpg';
import YogaTwo from './images/yoga-two.jpg';
import YogaThree from './images/yoga-three.jpg';
import YogaFour from './images/yoga-four.jpg';
import YogaFive from './images/yoga-five.jpg';
import YogaSix from './images/yoga-six.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          className: "Wind down with a restorative class",
          category: "restorative",
          classCount: 0,
          image: YogaOne,
          imageTxt: "restorative yoga"
        },
        {
          className: "One hour Yoga Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaTwo,
          imageTxt: 'sculpt yoga'
        },
        {
          className: "Deep Stretch with a Yoga Flow",
          category: "flow",
          classCount: 0,
          image: YogaThree,
          imageTxt: 'yoga flow'
        },
        {
          className: "Flow Class",
          category: "flow",
          classCount: 0,
          image: YogaFour,
          imageTxt: "yoga flow"
        },
        {
          className: "Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaFive,
          imageTxt: "sculpt yoga"
        },
        {
          className: "Restorative class",
          category: "restorative",
          classCount: 0,
          image: YogaSix,
          imageTxt: "restorative yoga"
        },
        {
          className: "Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaFive,
          imageTxt: "sculpt yoga"
        },
        {
          className: "Flow Class",
          category: "flow",
          classCount: 0,
          image: YogaFour,
          imageTxt: "yoga flow"
        },
        {
          className: "One hour Yoga Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaTwo,
          imageTxt: 'sculpt yoga'
        },
        {
          className: "Deep Stretch with a Yoga Flow",
          category: "flow",
          classCount: 0,
          image: YogaThree,
          imageTxt: 'yoga flow'
        },
        {
          className: "Wind down with a restorative class",
          category: "restorative",
          classCount: 0,
          image: YogaOne,
          imageTxt: "restorative yoga"
        },
      ],
    }
  }

  render() {
    return (
        <div className="App">
          <h1>Double Sessions</h1>
          <Filter data={this.state.data} />
          <LandingPage data={this.state.data} />
        </div>
    )
  }
}

export default App;
