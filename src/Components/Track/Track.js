import React from 'react';
import Track from './Track.css'

class TrackComponent extends React.Component {
  constructor(props) {
    super(props)

    this.renderAction = this.renderAction.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

    renderAction() {
      if (this.props.isRemoval) { //if this evaluates to true
          return <a className="Track-action" onClick={this.removeTrack}>-</a>;
      } else {
          return <a className="Track-action" onClick={this.addTrack}>+</a>;
      }
    }

    addTrack() {
      this.props.onAdd(this.props.track);
      console.log(this.props.isRemoval);
    }
    removeTrack(){
      this.props.onRemove(this.props.track);
      console.log(this.props.isRemoval)
    }

    render() {
      return (
        <div className="Track">
            <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist | this.props.track.album}</p>
            </div>
            {this.renderAction()}
        </div>
      );
    }
  }
  
export default TrackComponent;