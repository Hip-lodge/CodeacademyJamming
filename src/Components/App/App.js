import React, { Component } from 'react';

import PlaylistComponent from '../Playlist/Playlist';
import SearchResultsComponent from '../SearchResults/SearchResults'
import Spotify from '../../util/Spotify'
import SearchBarComponent from '../SearchBar/Search'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistTracks: [],
      playlistName: 'Salacadula Menchicabula',
    } //end state
    
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this);
  }

    addTrack(trackToAdd) {
      const { playlistTracks } = this.state;

      const doesTrackIdExistInTrackList = playlistTracks.some(
        track => track.id === trackToAdd.id
      );
  
      if (doesTrackIdExistInTrackList) {
        console.log('Track already exists in playlist');
      } else {
        this.setState({
          playlistTracks: [...playlistTracks, trackToAdd],
        });
      }
    }

    removeTrack(trackToRemove) {
      const { playlistTracks } = this.state;

      const newPlaylist = playlistTracks.filter(
        track => track.id !== trackToRemove.id
      );
  
      this.setState({
        playlistTracks: newPlaylist,
      });
    }

    updatePlaylistName(name){
      this.setState({playlistName: name});
    }
  

    savePlayList(){
      const tracksURI = this.state.playlistTracks.map(track => track.uri);
      Spotify.savePlaylist(this.state.playlistName, tracksURI).then(() => {
        this.setState({
          playlistTracks: [],
          playlistName: 'New Playlist',
        });
      });
    }

    search(term) {
      if (term) {
        Spotify.search(term).then(results => {
          this.setState({ searchResults: results });
        });
      } else {
        this.setState({ searchResults: [] });
      }
    }

  
  render() {
    return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBarComponent onSearch={this.search}/>            
            <div className="App-playlist">
              <SearchResultsComponent
                onAdd={this.addTrack} 
                searchResults={this.state.searchResults}
                />
              <PlaylistComponent 
                playlistName={this.state.playlistName} 
                playlistTracks={this.state.playlistTracks} 
                onRemove={this.removeTrack}
                onNameChange={this.updatePlaylistName}
                onSave={this.savePlayList}
                />           
            </div>
          </div>
        </div>
    );
  }
}

export default App;
