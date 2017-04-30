import React, { Component } from 'react'
import { useStrict, action } from 'mobx'
import { Provider, observer} from 'mobx-react'
import Loop from '../stores/Loop'
import Sequencer from './Sequencer'
import { MainWrapper } from './layouts'

const store = new Loop()





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
    store.initLoop()
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
          <Sequencer />
       </MainWrapper>
    </Provider>
    )
  }
}

export default App
