import React from 'react';
import Playlist from './Playlist.css'
import TrackListComponent from '../TrackList/TrackList';

class PlaylistComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.props.onNameChange(event.target.value)
    }

    render() {
      return (
          <div className="Playlist">
              <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
                <TrackListComponent 
                    isRemoval={true} 
                    onRemove={this.props.onRemove} 
                    tracks={this.props.playlistTracks}
                />
              <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
          </div>
      );
    }
  }
  
  
  export default PlaylistComponent;