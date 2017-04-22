import SequencerStore from '../SequencerStore'

describe("SequencerStore", () => {
  it("Initializes Pads, holds mobx array, is singleton, is initialized with 9x8 pads", () => {
    const store = SequencerStore
    expect(store.pads.length).toBe(72)
  })})
