import { observer, inject, PropTypes as mobxPropTypes } from 'mobx-react'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StyledPad from './StyledPad'



@inject('mainStore')
@observer
class Pad extends Component {
  constructor (props) {
    super(props)
    this.id = props.id
}



  handleClick = () => {
    this.props.pad.toggleSelected()
  };

  findPad = (pads) => {
    return pads.id === this.props.id
  };

  render () {
    const actualPad = this.props.mainStore.pads.find(this.findPad)
    return (
      <StyledPad onClick={this.handleClick}
        state={actualPad.state} m={actualPad.m} n={actualPad.n} 
       />
    )
  }
}

Pad.propTypes = {
  id: PropTypes.string.isRequired,
  pad:PropTypes.object.isRequired,
  }

Pad.wrappedComponent.propTypes = {
  mainStore:  PropTypes.shape({
    pads: mobxPropTypes.observableArrayOf(PropTypes.object),
    toggleLoopState: PropTypes.func,
    initStore: PropTypes.func,
  }).isRequired
  }


export default Pad
