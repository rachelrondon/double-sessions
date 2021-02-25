import React, { useState } from 'react';
import Card from './card.js';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 'all',
      filterData: this.props.data,
    }
  }

  showAll() {
    this.setState({
      category: 'all',
      filterData: this.props.data,
    })
  }

  showFlow() {
    let filteredList = this.props.data.filter((item) => {
      return item.category === "flow";
    });
    this.setState({
      category: 'flow',
      filterData: filteredList,
    })
  }

  showSculpt() {
    let filteredList = this.props.data.filter((item) => {
      return item.category === "sculpt";
    });
    this.setState({
      category: 'sculpt',
      filterData: filteredList,
    })
  }

  showRestorative() {
    let filteredList = this.props.data.filter((item) => {
      return item.category === "restorative";
    });
    this.setState({
      category: 'restorative',
      filterData: filteredList
    })
  }

  render() {
    return (
      <section className="filter-container">
        <div className="filter-btns">
          <button onClick={this.showFlow.bind(this)} className="filter">Flow</button>
          <button onClick={this.showSculpt.bind(this)} className="filter">Sculpt</button>
          <button onClick={this.showRestorative.bind(this)} className="filter">Restorative</button>
          <button onClick={this.showAll.bind(this)} className="filter">Show All</button>
        </div>
        <div className="container">
        {this.state.filterData.map((item) => {
          return (
            <Card
                className={item.className}
                category={item.category}
                classCount={item.classCount}
                image={item.image}
                imageTxt={item.imageTxt}
              />
          )
        })}
        </div>
      </section>
    )
  }
}
export default Filter;
