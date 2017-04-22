import React, { Component } from 'react'
import Tone from 'tone'
import DevTools from 'mobx-react-devtools'
import { useStrict, action } from 'mobx'
import { Provider, observer} from 'mobx-react'
import store from '../stores/SequencerStore'
import Sequencer from './Sequencer'
import styled from 'styled-components'
import { loop } from '../sound/sound'

const MainWrapper = styled.div`
max-width: 100vw;
width: 64vh;
height: 100vh;
margin:0 auto;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

useStrict(true)

@observer
class App extends Component {
  constructor (props) {
    super(props)
    this.store = store
  }

  componentDidMount () {
    this.loop = loop
    Tone.Transport.start()
    store.toggleLoopState()
    document.addEventListener('keydown', this.handleKeyPress.bind(this))
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyPress.bind(this))
  }

  @action
  handleKeyPress (e) {
    e.preventDefault()
    switch (e.keyCode) {
      case 32:
        store.toggleLoopState()
        break
      case 8:
        this.store.initStore()
        break
      default:
        null
    }
  }
  render () {

    return (
      <Provider mainStore={store} playingState={this.playingState}>
        <MainWrapper>
          <Sequencer />
        </MainWrapper>
      </Provider>
    )
  }
}

export default App
