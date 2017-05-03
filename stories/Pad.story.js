import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {withKnobs, number, select, color} from '@kadira/storybook-addon-knobs';
import {StyledPad} from './components'




const stories = storiesOf('A Pad component')


stories.addWithInfo('just a single isolated pad', () =>{

  const stateOptions = {
    playing: 'playing',
    idle: 'idle',
    selected: 'selected'

  }

  const size = number('size', 200)
  const singleState = select('single pad state', stateOptions, 'playing')
  const timing = number('timing in ms', 1000)
  const playingColor = color('color of playing pad', '#67001f');
  const idleColor = color('color of idle pad', '#002635');
  const theme = {
    background: {
      playing: [playingColor],
      idle: '#002635'
    }
  }

  const customPad = <StyledPad n={"10"} m={"10"} theme={theme} width={size.toString()} height={size.toString()} timing={timing.toString() + "ms"} state={singleState} onClick={() => null}/>

  return (
    <svg width='100vmin' height='100vmin'>
      <StyledPad n={"10"} m={"10"} y={"0"} theme={theme} width={size.toString()} height={size.toString()} timing={timing.toString() + "ms"} state={singleState} onClick={() => null}/>

    </svg>
  )
},
{ header: true, inline: false, propTables: [StyledPad] }
)

stories.add('pads in a matrix matrix', () => {
  function initPads(numberRows, numberCols) {
    const arr = []
    for (let n = 0; n < numberCols; n++) {
      for (let m = 0; m < numberRows; m++) {
        arr.push({m, n})
      }
    }
    arr.sort(function(a, b) {
      let rowDifference = a.m - b.m
      if (rowDifference === 0) {
        const columnDifference = a.n - b.n
        return columnDifference
      } else {
        return rowDifference
      }
    })
    return arr
  }

  const stateOptions = {
    playing: 'playing',
    idle: 'idle',
    selected: 'selected'

  }
  const size = number('size', 300)
  const manyState = select('many pads state', stateOptions, 'idle')
  const singleState = select('single pad state', stateOptions, 'playing')
  const timing = number('timing in ms', 1000)
  const pads = initPads(9, 8)
  const playingColor = color('color of playing pad', '#67001f');
  const idleColor = color('color of idle pad', '#002635');
  const theme = {
    background: {
      playing: [playingColor],
      idle: '#002635'
    }
  }



  const customPad = <StyledPad n={"6"} m={"3"} theme={theme} key={30} width={size.toString()} height={size.toString()} timing={timing.toString() + "ms"} state={singleState} onClick={() => null}/>
  const dummyPads = pads.map((x, index) => <StyledPad key={index} n={x.n} m={x.m} theme={theme} width={size.toString()} height={size.toString()} timing={timing.toString() + "ms"} state={manyState} onClick={() => null}/>)
  dummyPads.splice(30, 1, (customPad))
  return (
    <svg width='88.88vmin' height='100vmin' viewBox="0 0 80 90" preserveAspectRatio="xMidYMid meet">
      {dummyPads}
    </svg>)})
