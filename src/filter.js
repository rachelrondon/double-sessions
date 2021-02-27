import React, { useState } from 'react';
import Card from './card.js';

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 'all',
      filterData: this.props.data,
      showCount: 3,
      favorites: [],
      expanded: false,
      btnText: "Show More"
    }
  }

  showAll() {
    this.setState({
      category: 'all',
      filterData: this.props.data,
      showCount: 3,
    })
  }

  showFlow() {
    let filteredList = this.props.data.filter((item) => {
      return item.category === "Flow";
    });
    this.setState({
      category: 'flow',
      filterData: filteredList,
      showCount: 3,
    })
  }

  showSculpt() {
    let filteredList = this.props.data.filter((item) => {
      return item.category === "Sculpt";
    });
    this.setState({
      category: 'sculpt',
      filterData: filteredList,
      showCount: 3,
    })
  }

  showRestorative() {
    let filteredList = this.props.data.filter((item) => {
      return item.category === "Restorative";
    });
    this.setState({
      category: 'restorative',
      filterData: filteredList,
      showCount: 3,
    })
  }

  loadMore() {
    this.state.showCount === 3 ? (
      this.setState({
        showCount: this.state.showCount + 3,
        expanded: true,
        btnText: "Show Less"
      })
    ) : this.setState({
      showCount: 3,
      expanded: false,
      btnText: "Show More"
    })
  }

  render() {
    let expanded = this.state.expanded;

    return (
      <section className="filter-container">
        <h2 className="filter-classes">View Classes</h2>
        <div className="filter-btns">
          <button onClick={this.showFlow.bind(this)} className="btn">Flow</button>
          <button onClick={this.showSculpt.bind(this)} className="btn">Sculpt</button>
          <button onClick={this.showRestorative.bind(this)} className="btn">Restorative</button>
          <button onClick={this.showAll.bind(this)} className="btn">Show All</button>
        </div>
        <div className="container">
        {this.state.filterData.slice(0, this.state.showCount).map((item) => {
          return (
            <Card
                favorite={item.favorite}
                key={item.id}
                className={item.className}
                category={item.category}
                classCount={item.classCount}
                image={item.image}
                imageTxt={item.imageTxt}
                instructor={item.instructor}
              />
          )
        })}
        </div>
        <div className="filter-container-btn">
          <button className="load-more-btn" onClick={this.loadMore.bind(this)}>{this.state.btnText}</button>
        </div>
      </section>
    )
  }
}
export default Filter;
