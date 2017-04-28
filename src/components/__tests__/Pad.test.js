import React from 'react'
import renderer from 'react-test-renderer'
import Pad from '../Pad'

const spyOnClick = jest.fn();

describe("Pad", function() {
  let props = {}
  let pad = {}
  beforeEach(function() {

    props = {id: "111"}
    this.store = {
      pads: [
        {state: "idle", id: "111", m: 1, n: 1},
        {state: "idle", id: "222", m: 1, n: 1},
        {state: "idle", id: "222", m: 1, n: 1},
      ]
    }
  })

  it('renders without crashing', function() {
    const tree = renderer.create(<Pad.wrappedComponent
    mainStore={this.store} id={props.id}  state='playing' onClick={spyOnClick} pad={pad} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
