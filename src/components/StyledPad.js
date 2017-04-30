import styled, { css } from 'styled-components'
import React from 'react'
import sample from 'lodash.sample'
import { darken } from 'polished'
import PropTypes from 'prop-types'
import { background } from '../config/styles'


const StyledPad = (props) => (
  <StyledSquare {...props}
      width={props.width}
      height={props.height}
      x={props.n*10}
      y={props.m*10}
      state={props.state}
      shape-rendering="geometricPrecision"
      onClick={props.onClick}
    />
);

const StyledSquare = styled.rect`
&:hover {
  opacity: 0.9
};
  cursor: pointer;
${props => {
  switch (props.state) {
    case 'playing':
      return css`
    fill: ${props=>sample(props.background.playing)};
    transition: fill ${props.timing} cubic-bezier(0.175, 0.885, 0.32, 1.275);
  `
    case 'idle':
      return css`
    fill: ${props=>props.background.idle};
    transition: fill ${props.timing} cubic-bezier(0.175, 0.885, 0.32, 1.275);

`
    case 'selected':
      return css`
     fill: ${props=>darken(0.01, props.background.idle)};
     transition: fill ${props.timing} cubic-bezier(0.175, 0.885, 0.32, 1.275);
     `
    default:
      return css`
      fill: ${props=>props.background.idle};
     `
    }
  }};
    `
  StyledPad.propTypes = {
    state: PropTypes.oneOf(['idle', 'playing', 'selected']).isRequired,
    onClick: PropTypes.func.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    timing: PropTypes.string,
  }


  StyledSquare.defaultProps = {
    width: '10',
    height: '10',
    timing: '3s' ,
    background: background
  }



export default StyledPad
