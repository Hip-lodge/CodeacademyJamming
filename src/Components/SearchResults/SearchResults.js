import React from 'react';
import SearchResults from './SearchResults.css'
import TrackList from '../TrackList/TrackList'
import TrackListComponent from '../TrackList/TrackList';

class SearchResultsComponent extends React.Component {

    render() {
      return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackListComponent
                  isRemoval={false} 
                  onAdd={this.props.onAdd} 
                  tracks={this.props.searchResults}
                  />
            </div>
      );
    }
  }
  
export default SearchResultsComponent;