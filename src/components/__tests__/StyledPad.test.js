import React from 'react'
import { shallow } from 'enzyme'
import StyledPad from '../StyledPad'
import { matcher, serializer } from 'jest-styled-components'

expect.extend(matcher)
expect.addSnapshotSerializer(serializer)

it('renders without crashing', () => {
  const wrapper = shallow(<StyledPad
    state='playing' />)
  expect(wrapper).toMatchStyledComponentsSnapshot()
})
