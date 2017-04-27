import PadModel from '../PadModel'

let pad = null
beforeEach(() => {pad = new PadModel()})


describe('A Pad can be playing or not also it can be selected or not', () => {
jest.useFakeTimers();


  it('got properly initialized with the init state as idle ', () => {
    expect(pad).toBeInstanceOf(PadModel)
    expect(pad.state).toBe('idle')
  })
  it('gets selected and can be toggled to playing now, toggle selection switches'+
  'back to idle', () => {
    expect(pad.state).toBe('idle')
    pad.toggleSelected()
    expect(pad.state).toBe('selected')
    pad.togglePlaying()
    expect(pad.state).toBe('playing')
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
