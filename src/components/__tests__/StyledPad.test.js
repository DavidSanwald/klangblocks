import React from 'react'
import renderer from 'react-test-renderer'
import { matcher, serializer } from 'jest-styled-components'
import StyledPad from '../StyledPad'

expect.extend(matcher)
expect.addSnapshotSerializer(serializer)

// foo.js
module.exports = function() {
  // some implementation;
};

// test.js
jest.mock('lodash.sample'); // this happens automatically with automocking
const sample = require('lodash.sample');

// foo is a mock function
sample.mockImplementation((array) => array[0]);
const spyOnClick = jest.fn();


it('renders without crashing', () => {
  const tree = renderer.create(<StyledPad
    state='playing' onClick={spyOnClick}  />).toJSON()
  expect(tree).toMatchStyledComponentsSnapshot()
})
