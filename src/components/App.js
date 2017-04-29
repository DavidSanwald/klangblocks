import React, { Component } from 'react'
import Tone from 'tone'
import { useStrict, action } from 'mobx'
import { Provider, observer} from 'mobx-react'
import Loop from '../stores/Loop'
import Sequencer from './Sequencer'
import { MainWrapper } from './layouts'
import Devtools from 'mobx-react-devtools'

const store = new Loop()
Tone.Transport.start()




useStrict(true)

const SPACEBAR_KEY = 32;
const BACKSPACE_KEY = 8;


@observer
class App extends Component {
  constructor (props) {
    super(props)
    this.store = store
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyPress.bind(this))
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeyPress.bind(this))
  }

  @action
  handleKeyPress (e) {
    e.preventDefault()
    switch (e.keyCode) {
      case SPACEBAR_KEY:
        store.toggleLoopState()
        break
      case BACKSPACE_KEY:
        this.store.initStore()
        break
      default:

    }
  }
  render () {

    return (
      <Provider mainStore={store}>
        <MainWrapper>
            <Devtools/>
          <Sequencer />
       </MainWrapper>
    </Provider>
    )
  }
}

export default App
