import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './filter.js';
import Nav from './nav.js';
import YogaOne from './images/yoga-one.jpg';
import YogaThree from './images/yoga-three.jpg';
import YogaFour from './images/yoga-four.jpg';
import YogaSix from './images/yoga-six.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          favorite: '',
          className: "Wind down with a restorative class",
          category: "restorative",
          classCount: 0,
          image: YogaOne,
          imageTxt: "restorative yoga"
        },
        {
          id: 2,
          favorite: '',
          className: "Wind down with a restorative class",
          category: "restorative",
          classCount: 0,
          image: YogaOne,
          imageTxt: "restorative yoga"
        },
        {
          id: 3,
          favorite: '',
          className: "Wind down with a restorative class",
          category: "restorative",
          classCount: 0,
          image: YogaOne,
          imageTxt: "restorative yoga"
        },
        {
          id: 4,
          favorite: '',
          className: "Wind down with a restorative class",
          category: "restorative",
          classCount: 0,
          image: YogaOne,
          imageTxt: "restorative yoga"
        },
        {
          id: 5,
          favorite: '',
          className: "One hour Yoga Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaThree,
          imageTxt: 'sculpt yoga'
        },
        {
          id: 6,
          favorite: '',
          className: "One hour Yoga Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaThree,
          imageTxt: 'sculpt yoga'
        },
        {
          id: 7,
          favorite: '',
          className: "One hour Yoga Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaThree,
          imageTxt: 'sculpt yoga'
        },
        {
          id: 8,
          favorite: '',
          className: "One hour Yoga Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaThree,
          imageTxt: 'sculpt yoga'
        },
        {
          id: 9,
          favorite: '',
          className: "Deep Stretch with a Yoga Flow",
          category: "flow",
          classCount: 0,
          image: YogaThree,
          imageTxt: 'yoga flow'
        },
        {
          id: 10,
          favorite: '',
          className: "Flow Class",
          category: "flow",
          classCount: 0,
          image: YogaFour,
          imageTxt: "yoga flow"
        },
        {
          id: 11,
          favorite: '',
          className: "Flow Class",
          category: "flow",
          classCount: 0,
          image: YogaFour,
          imageTxt: "yoga flow"
        },
        {
          id: 12,
          favorite: '',
          className: "Flow Class",
          category: "flow",
          classCount: 0,
          image: YogaFour,
          imageTxt: "yoga flow"
        },
        {
          id: 13,
          favorite: '',
          className: "Flow Class",
          category: "flow",
          classCount: 0,
          image: YogaFour,
          imageTxt: "yoga flow"
        },
        {
          id: 14,
          favorite: '',
          className: "Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaThree,
          imageTxt: "sculpt yoga"
        },
        {
          id: 15,
          favorite: '',
          className: "Restorative class",
          category: "restorative",
          classCount: 0,
          image: YogaSix,
          imageTxt: "restorative yoga"
        },
        {
          id: 16,
          favorite: '',
          className: "Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaThree,
          imageTxt: "sculpt yoga"
        },
        {
          id: 17,
          favorite: '',
          className: "Flow Class",
          category: "flow",
          classCount: 0,
          image: YogaFour,
          imageTxt: "yoga flow"
        },
        {
          id: 18,
          favorite: '',
          className: "One hour Yoga Sculpt Class",
          category: "sculpt",
          classCount: 0,
          image: YogaThree,
          imageTxt: 'sculpt yoga'
        },
        {
          id: 19,
          favorite: '',
          className: "Deep Stretch with a Yoga Flow",
          category: "flow",
          classCount: 0,
          image: YogaThree,
          imageTxt: 'yoga flow'
        },
        {
          id: 20,
          favorite: '',
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
          <Nav /> 
          <Filter data={this.state.data} />
        </div>
    )
  }
}

export default App;
