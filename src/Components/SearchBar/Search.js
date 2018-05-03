import React from 'react';
import Search from './Search.css'

class SearchBarComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {term: ''}
    this.handleTermChange = this.handleTermChange.bind(this)
  }

    handleTermChange(event) {
      this.setState({
      term: event.target.value
      })
    }

    render() {
      return (
        <div className="SearchBar">
            <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
            <a onClick={() => this.props.onSearch(this.state.term)}>SEARCH</a>
        </div>
      );
    }
  }
  
  
  
  export default SearchBarComponent;


