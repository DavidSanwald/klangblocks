import { observable, action, computed } from 'mobx'
import uuid from 'uuid'




export class SequencerStore {
  @observable
  pads = [];
  @observable
  isRunning = false;

  constructor (numberRows = 9, numberCols = 8) {
    this.initStore(numberRows, numberCols)
  }

  @computed
  get selectedPads () {
    const selectedPads = this.pads.filter(pad => pad.isSelected === true)
    return selectedPads
  }

  @action
  toggleLoopState () {
    this.isRunning = !this.isRunning
  }

  @action
  initStore (numberRows = 9, numberCols = 8) {
    this.pads = this.initPads(numberRows, numberCols)
  }

  initPads (numberRows, numberCols) {
    const arr = []
    for (let n = 0; n < numberCols; n++) {
      for (let m = 0; m < numberRows; m++) {
        arr.push({ m, n })
      }
    }
    const pads = arr.map(({ m, n }) => new Pad(m, n, this))
    pads.sort(function (a, b) {
      let rowDifference = a.m - b.m
      if (rowDifference === 0) {
        const columnDifference = a.n - b.n
        return columnDifference
      } else {
        return rowDifference
      }
    })
    return pads
  }
}


export class Pad {
  @observable
  isSelected = false;
  @observable
  isPlaying = false;
  id = null;
  store = null;


  constructor (m, n, store, id = uuid.v4()) {
    this.store = store
    this.id = id
    this.m = m
    this.n = n
  }

  @action.bound
  toggleSelected () {
    this.isSelected = !this.isSelected
  }

  @action.bound
  togglePlaying () {
    this.isPlaying = !this.isPlaying
  }

  @computed
  get state(){
    const state =
    !this.isSelected?
    'idle':
    this.isPlaying?
    'playing':
    'selected'
  return state
  }

  pling (duration) {
    this.togglePlaying()
    setTimeout(this.togglePlaying, duration)
  }
}


const singleton = new SequencerStore()

export default singleton
