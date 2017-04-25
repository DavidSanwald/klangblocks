import { observer, inject, PropTypes as mobxPropTypes} from 'mobx-react'
import React, { Component } from 'react'
import Pad from './Pad'
import PropTypes from 'prop-types'
import {SequencerBoard} from './layouts'


@inject('mainStore')
@observer
class Sequencer extends Component {
  render () {
    return (

        <svg width='100%'
           height='100%' viewBox="0 0 80 90"  >
        {this.props.mainStore.pads.map(x => <Pad pad={x} key={x.id} id={x.id} />)}
      </svg>


    )
  }
}

Sequencer.wrappedComponent.propTypes = {
  mainStore: PropTypes.shape({
    pads: mobxPropTypes.observableArrayOf(PropTypes.object),
  }).isRequired
}

export default Sequencer
