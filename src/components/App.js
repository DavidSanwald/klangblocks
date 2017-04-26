import React, { Component } from 'react'
import Tone from 'tone'
import { useStrict, action } from 'mobx'
import { Provider, observer} from 'mobx-react'
import store from '../stores/SequencerStore'
import Sequencer from './Sequencer'
import { MainWrapper } from './layouts'
import { loop } from '../sound/sound'




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

    }
  }
  render () {

    return (
      <Provider mainStore={store}>
        <MainWrapper>
          <Sequencer />
       </MainWrapper>
    </Provider>
    )
  }
}

export default App
