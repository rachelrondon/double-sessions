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
      btnText: "Show More",
      searchTerm: "",
      loadMoreBtnClass: "load-more-btn"
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

  handleSubmit(e) {
    e.preventDefault();
    let inputText = this.state.searchTerm;
    let firstLetter = inputText[0];
    let newInput = inputText.replace(firstLetter, firstLetter.toUpperCase());

    let filteredList = this.props.data.filter((item) => {
      return item.category.includes(newInput) || item.className.includes(newInput);
    })

    if (filteredList.length >= 1) {
      this.setState({
        loadMoreBtnClass: "load-more-btn",
        filterData: filteredList
      })
    } else {
      this.setState({
        loadMoreBtnClass: "hidden",
        filterData: filteredList
      })
    }
  }

  render() {
    let expanded = this.state.expanded;
    console.log(this.state.filterData);

    return (
      <section className="filter-container">
        <h2 className="filter-classes">View Classes</h2>
        <div className="filters">
          <div className="filter-btns">
            <button onClick={this.showFlow.bind(this)} className="btn">Flow</button>
            <button onClick={this.showSculpt.bind(this)} className="btn">Sculpt</button>
            <button onClick={this.showRestorative.bind(this)} className="btn">Restorative</button>
            <button onClick={this.showAll.bind(this)} className="btn">Show All</button>
          </div>
          <div className="filter-search">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input
                type="text"
                placeholder="search"
                value={this.state.searchTerm}
                onChange={(e) => this.setState({searchTerm: e.target.value})}
              />
            </form>
          </div>
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
          <button className={this.state.loadMoreBtnClass} onClick={this.loadMore.bind(this)}>{this.state.btnText}</button>
        </div>
      </section>
    )
  }
}
export default Filter;
