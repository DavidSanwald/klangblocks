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
      <SequencerBoard>
        {this.props.mainStore.pads.map(x => <Pad pad={x} key={x.id} id={x.id} />)}
      </SequencerBoard>
    )
  }
}

Sequencer.wrappedComponent.propTypes = {
  mainStore: PropTypes.shape({
    pads: mobxPropTypes.observableArrayOf(PropTypes.object),
  }).isRequired
}

export default Sequencer
