import { observable, action, computed } from 'mobx'
import uuid from 'uuid'



export default class PadModel {
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
    this.timerId = false
  }

  @action.bound
  toggleSelected () {
    this.isSelected = !this.isSelected
    this.timerId?
       (clearTimeout(this.timerId),
       this.timerId=false):
       ()=>null
  }

  @action.bound
  togglePlaying () {
    if(this.isSelected){
    this.isPlaying= !this.isPlaying}
    else{
    throw Error('Cannot play if not selected')};
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
    this.timerId = setTimeout(this.togglePlaying, duration)
  }
}
