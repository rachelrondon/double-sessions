import React from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './filter.js';
import Nav from './nav.js';
import Collection from './collection.js';
import Hero from './hero.js';
import YogaOne from './images/yoga-one.jpg';
import YogaThree from './images/yoga-three.jpg';
import YogaFour from './images/yoga-four.jpg';
import YogaSix from './images/yoga-six.jpg';
import CollectionOne from './images/collection-one.jpg';
import CollectionTwo from './images/collection-two.jpg';
import CollectionThree from './images/collection-three.jpg';
import CollectionFour from './images/collection-four.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: [
          {
            id: 1,
            category: "Restorative",
            collectionTitle: "Restorative Collection",
            title: "Relax & Reflex",
            image: CollectionOne,
            imageTxt: "restorative yoga"
          },
          {
            id: 2,
            category: "Sculpt",
            collectionTitle: "Yoga Sculpt",
            title: "Relax & sculpt",
            image: CollectionTwo,
            imageTxt: "yoga sculpt"
          },
          {
            id: 3,
            category: "Flow",
            collectionTitle: "Flow",
            title: "Beginner yoga flows",
            image: CollectionThree,
            imageTxt: "yoga flow"
          },
          {
            id: 4,
            category: "Sculpt",
            collectionTitle: "sculpt",
            title: "20 minute yoga sculpts",
            image:CollectionFour,
            imageTxt: "yoga sculpt"
          },
          {
            id: 5,
            category: "Flow",
            collectionTitle: "Flow",
            title: "Beginner yoga flows",
            image: CollectionOne,
            imageTxt: "yoga flow"
          },
          {
            id: 6,
            category: "Sculpt",
            collectionTitle: "sculpt",
            title: "20 minute yoga sculpts",
            image: CollectionTwo,
            imageTxt: "yoga sculpt"
          },
      ],
      data: [
        {
          id: 1,
          favorite: '',
          className: "Wind down with a restorative class",
          category: "Restorative",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionOne,
          imageTxt: "restorative yoga"
        },
        {
          id: 2,
          favorite: '',
          className: "Wind down with a restorative class",
          category: "Restorative",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionTwo,
          imageTxt: "restorative yoga"
        },
        {
          id: 3,
          favorite: '',
          className: "Wind down with a restorative class",
          category: "Restorative",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionThree,
          imageTxt: "restorative yoga"
        },
        {
          id: 4,
          favorite: '',
          className: "Wind down with a restorative class",
          category: "Restorative",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionFour,
          imageTxt: "restorative yoga"
        },
        {
          id: 5,
          favorite: '',
          className: "One hour Yoga Sculpt Class",
          category: "Sculpt",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionOne,
          imageTxt: 'sculpt yoga'
        },
        {
          id: 6,
          favorite: '',
          className: "One hour Yoga Sculpt Class",
          category: "Sculpt",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionTwo,
          imageTxt: 'sculpt yoga'
        },
        {
          id: 7,
          favorite: '',
          className: "One hour Yoga Sculpt Class",
          category: "Sculpt",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionThree,
          imageTxt: 'sculpt yoga'
        },
        {
          id: 8,
          favorite: '',
          className: "One hour Yoga Sculpt Class",
          category: "Sculpt",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionFour,
          imageTxt: 'sculpt yoga'
        },
        {
          id: 9,
          favorite: '',
          className: "Deep Stretch with a Yoga Flow",
          category: "Flow",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionOne,
          imageTxt: 'yoga flow'
        },
        {
          id: 10,
          favorite: '',
          className: "Flow Class",
          category: "Flow",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionTwo,
          imageTxt: "yoga flow"
        },
        {
          id: 11,
          favorite: '',
          className: "Flow Class",
          category: "Flow",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionThree,
          imageTxt: "yoga flow"
        },
        {
          id: 12,
          favorite: '',
          className: "Flow Class",
          category: "Flow",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionFour,
          imageTxt: "yoga flow"
        },
        {
          id: 13,
          favorite: '',
          className: "Flow Class",
          category: "Flow",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionOne,
          imageTxt: "yoga flow"
        },
        {
          id: 14,
          favorite: '',
          className: "Sculpt Class",
          category: "Sculpt",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionTwo,
          imageTxt: "sculpt yoga"
        },
        {
          id: 15,
          favorite: '',
          className: "Restorative class",
          category: "Restorative",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionThree,
          imageTxt: "restorative yoga"
        },
        {
          id: 16,
          favorite: '',
          className: "Sculpt Class",
          category: "Sculpt",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionFour,
          imageTxt: "sculpt yoga"
        },
        {
          id: 17,
          favorite: '',
          className: "Flow Class",
          category: "Flow",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionOne,
          imageTxt: "yoga flow"
        },
        {
          id: 18,
          favorite: '',
          className: "One hour Yoga Sculpt Class",
          category: "Sculpt",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionTwo,
          imageTxt: 'sculpt yoga'
        },
        {
          id: 19,
          favorite: '',
          className: "Deep Stretch with a Yoga Flow",
          category: "Flow",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionThree,
          imageTxt: 'yoga flow'
        },
        {
          id: 20,
          favorite: '',
          className: "Wind down with a restorative class",
          category: "Restorative",
          instructor: "Rachel Rondon",
          classCount: 0,
          image: CollectionFour,
          imageTxt: "restorative yoga"
        },
      ],
    }
  }

  render() {
    return (
        <div className="App">
          <Nav />
          <Hero />
          <Filter data={this.state.data} />
          <Collection collection={this.state.collection} />
        </div>
    )
  }
}

export default App;
