import React from 'react'
import renderer from 'react-test-renderer'
import Pad from '../Pad'

const spyOnClick = jest.fn();
const mainStore = {
  pads : [1,2,3],
  state: null

}


it('renders without crashing', () => {
  const tree = renderer.create(<Pad
  mainStore={mainStore}  state='playing' onClick={spyOnClick}  />).toJSON()
  expect(tree).toMatchSnapshot()
})
