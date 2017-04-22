import React from 'react';
import { shallow } from 'enzyme';
import StyledPad from '../StyledPad';

it('renders without crashing', () => {
  shallow(<StyledPad />);
});
