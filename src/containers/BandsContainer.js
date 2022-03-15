import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return(
      <ul>
        <BandInput addBand={this.props.addBand}/>

      </ul>
    )
  }
}
// Use BandsContainer to access the Redux store using the provided 
// mapStateToProps method. Pass the bands obtained from the store 
// into the Bands component.
const mapStateToProps = (state) => {
  return {bands: state.bands}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: name => dispatch({type: "ADD_BAND", name: name}),
    delete: (bandText) => dispatch({ type: "DELETE_BAND", payload: bandText })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer); 
