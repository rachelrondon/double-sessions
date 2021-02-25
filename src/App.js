import React from 'react';
import logo from './logo.svg';
import './App.css';
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
          id: 1,
          className: "Wind down with a restorative class",
          category: "restorative",
          classCount: 0,
          image: YogaOne,
          imageTxt: "restorative yoga"
        },
        {
          id: 2,
          className: "Wind down with a restorative class",
          category: "restorative",
          classCount: 0,
          image: YogaOne,
          imageTxt: "restorative yoga"
        },
        {
          id: 3,
          className: "Wind down with a restorative class",
          category: "restorative",
          classCount: 0,
          image: YogaOne,
          imageTxt: "restorative yoga"
        },
        {
          id: 4,
          className: "Wind down with a restorative class",
          category: "restorative",
          classCount: 0,
          image: YogaOne,
          imageTxt: "restorative yoga"
        },
        {
          id: 5,
          className: "One hour Yoga Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaTwo,
          imageTxt: 'sculpt yoga'
        },
        {
          id: 6,
          className: "One hour Yoga Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaTwo,
          imageTxt: 'sculpt yoga'
        },
        {
          id: 7,
          className: "One hour Yoga Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaTwo,
          imageTxt: 'sculpt yoga'
        },
        {
          id: 8,
          className: "One hour Yoga Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaTwo,
          imageTxt: 'sculpt yoga'
        },
        {
          id: 9,
          className: "Deep Stretch with a Yoga Flow",
          category: "flow",
          classCount: 0,
          image: YogaThree,
          imageTxt: 'yoga flow'
        },
        {
          id: 10,
          className: "Flow Class",
          category: "flow",
          classCount: 0,
          image: YogaFour,
          imageTxt: "yoga flow"
        },
        {
          id: 11,
          className: "Flow Class",
          category: "flow",
          classCount: 0,
          image: YogaFour,
          imageTxt: "yoga flow"
        },
        {
          id: 12,
          className: "Flow Class",
          category: "flow",
          classCount: 0,
          image: YogaFour,
          imageTxt: "yoga flow"
        },
        {
          id: 13,
          className: "Flow Class",
          category: "flow",
          classCount: 0,
          image: YogaFour,
          imageTxt: "yoga flow"
        },
        {
          id: 14,
          className: "Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaFive,
          imageTxt: "sculpt yoga"
        },
        {
          id: 15,
          className: "Restorative class",
          category: "restorative",
          classCount: 0,
          image: YogaSix,
          imageTxt: "restorative yoga"
        },
        {
          id: 16,
          className: "Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaFive,
          imageTxt: "sculpt yoga"
        },
        {
          id: 17,
          className: "Flow Class",
          category: "flow",
          classCount: 0,
          image: YogaFour,
          imageTxt: "yoga flow"
        },
        {
          id: 18,
          className: "One hour Yoga Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaTwo,
          imageTxt: 'sculpt yoga'
        },
        {
          id: 19,
          className: "Deep Stretch with a Yoga Flow",
          category: "flow",
          classCount: 0,
          image: YogaThree,
          imageTxt: 'yoga flow'
        },
        {
          id: 20,
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
        </div>
    )
  }
}

export default App;
