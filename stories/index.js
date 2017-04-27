import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  select
} from '@kadira/storybook-addon-knobs';
import centered from '@kadira/react-storybook-decorator-centered';
import StyledPad from '../src/components/StyledPad'

const stories = storiesOf('Storybook Sequencer', module);



stories.addDecorator(centered);
stories.addDecorator(withKnobs);


stories.add('a Pad', () => {

  const stateLabel = 'states';
  const options = {
    idle: 'idle',
    playing: 'playing',
    selected: 'selected'
  };
  const stateDefault = 'idle';
  const state = select(stateLabel, options, stateDefault)

  const widthLabel = 'width'
  const widthDefault = 100
  const width = number(widthLabel, widthDefault)

  const heightLabel = 'height'
  const heightDefault = 100
  const height = number(heightLabel, heightDefault)
  return (
    <svg>
      <StyledPad width={width.toString()} height={height.toString()} state={state} onClick={() => null}/>
    </svg>)})
