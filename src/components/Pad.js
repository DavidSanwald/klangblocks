import { observer, inject } from 'mobx-react'
import {observable, action, autorun} from 'mobx'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import sample from 'lodash.sample'
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
    let test = this.props.mainStore.isRunning




    return (
      <StyledPad onClick={this.handleClick}
        isPlaying={actualPad.isPlaying}
        isActive={actualPad.isSelected}
       />
    )
  }
}

Pad.propTypes = {
  id: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
}

export default Pad
