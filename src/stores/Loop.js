import { observable, action, computed } from 'mobx'
import uuid from 'uuid'
import PadModel from './PadModel'



export default class Loop {
  @observable
  pads = [];
  @observable
  isRunning = false;

  constructor (numberRows = 9, numberCols = 8, id = uuid.v4()) {
    this.id = id
    this.initStore()
  }

  @computed
  get selectedPads () {
    const selectedPads = this.pads.filter(pad => pad.isSelected === true)
    return selectedPads
  }

  @action
  toggleLoopState () {
  //  this.loop.state === 'started'?
  //  this.loop.stop():
//    this.loop.start()
  }

  @action
  initStore (numberRows = 9, numberCols = 8) {
    this.pads = this.initPads(numberRows, numberCols)

  }
  @action
  initLoop(){
    require.ensure(['../sound/loop'], (require) => {
  const Profile = require('../sound/loop.js').default
  this.loop=Profile(this)
console.log(this.loop)
})

    this.toggleLoopState()
  }
  initPads (numberRows, numberCols) {
    const arr = []
    for (let n = 0; n < numberCols; n++) {
      for (let m = 0; m < numberRows; m++) {
        arr.push({ m, n })
      }
    }
    const pads = arr.map(({ m, n }) => new PadModel(m, n, this))
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
