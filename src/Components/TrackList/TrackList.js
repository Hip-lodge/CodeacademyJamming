import React from 'react';
import TrackList from './TrackList.css'
import TrackComponent from '../Track/Track';

const TrackListComponent = ({ tracks, ...otherProps }) => (
  <div className="TrackList">
      {tracks.map(track => (
          <TrackComponent
            track={track}
            key={track.id} 
            {...otherProps}
          />
        )
      )}
  </div>
);
  
export default TrackListComponent;