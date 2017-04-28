/* eslint-disable no-unused-vars */
import PadModel from '../PadModel'
import Loop from '../Loop'
import buildLoop from '../../sound/loop'
jest.mock('../PadModel')
jest.mock('../../sound/loop')


describe('Loop initializes and creates pad instances', () => {

  const store = new Loop(9, 8)

  it('Initializes m x n Pads and sorts them in row/column order', () => {
    expect(store.pads[0]).toBeInstanceOf(PadModel)
    expect(store.pads.length).toBe(72)
  })

    it('Toggles playing state', () => {
      store.toggleLoopState()
      expect(store.loop.start).toHaveBeenCalled()})


})
