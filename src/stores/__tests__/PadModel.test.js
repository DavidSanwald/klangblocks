import PadModel from '../PadModel'

function createPad(state){
  let pad = new PadModel(0,1)
  Object.defineProperty(pad, 'state', {
get: jest.fn(()=>state)
})
return pad}


describe('A pad represents one tone', () => {
jest.useFakeTimers();
let pad = null

beforeAll(() => {pad = new PadModel(0,1)})
describe('initialization', () => {
  beforeAll(() => {
    pad = createPad('idle')
})


  test('is instance of the right class ', () => {
    expect(pad).toBeInstanceOf(PadModel)
  })
  test('its initial state is "idle"', ()=>{
    expect(pad.state).toBe('idle')
  })
  test('it has the right row and col/m and n property', ()=>{
    expect(pad.m).toBe(0)
    expect(pad.n).toBe(1)
  })
})
describe('Interaction', () => {
  let pad = null
  beforeEach(() => {pad = new PadModel(0,1)})
  it('gets selected and can be toggled to playing now, toggle selection switches'+
  'back to idle', () => {
    expect(pad.state).toBe('idle')
    pad.toggleSelected()
    expect(pad.state).toBe('selected')
    pad.togglePlaying()
    expect(pad.state).toBe('playing')
  })
})

describe('A Pad can be playing or not also it can be selected or not', () => {
  it('can toggle to selected, than be played and turns off after setTimeout', () => {
    expect(pad.state).toBe('idle')
    pad.toggleSelected()
    expect(pad.state).toBe('selected')
    pad.pling()
    expect(setTimeout.mock.calls.length).toBe(1);
    jest.runOnlyPendingTimers();
    expect(pad.state).toBe('selected')
  })
  it('can toggle to selected, than be played and turns off after setTimeout', () => {
    pad.toggleSelected()
    pad.pling()
    pad.toggleSelected()
    jest.runOnlyPendingTimers();
    expect(clearTimeout.mock.calls.length).toBe(1)
  })
})
})
