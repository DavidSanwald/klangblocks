import { observer, inject, PropTypes as mobxPropTypes} from 'mobx-react'
import React, { Component } from 'react'
import Pad from './Pad'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SequencerBoard = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
height: 72vh;
`

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

Sequencer.propTypes = {
  mainStore: PropTypes.shape({
    pads: mobxPropTypes.observableArrayOf(PropTypes.object),
  })
}

export default Sequencer
