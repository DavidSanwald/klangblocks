import styled, { css, keyframes } from 'styled-components'
import React from 'react'
import sample from 'lodash.sample'
import { darken } from 'polished'
import PropTypes from 'prop-types'



function klingAnimation(props) {
  return keyframes`
  from {
      fill: ${props=>darken(0.01, props.theme.background.idle)};
  }
    to {
      fill:  ${sample(props.theme.background.playing)};
    }
  `;
}

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
  fill: ${props=>props.theme.background.idle};
  cursor: pointer;
${props => {
  switch (props.state) {
    case 'playing':
      return css`
        fill: ${props=>darken(0.01, props.theme.background.idle)};
        animation: ${klingAnimation(props)} 0.5s;
  `
    case 'idle':
      return css`
    fill: ${props=>props.theme.background.idle};`
    case 'selected':
      return css`
     fill: ${props=>darken(0.01, props.theme.background.idle)};     `
    default:
      return css`
      fill: ${props=>props.theme.background.idle};
     `
    }
  }}
  ${props=>{
    return css `
    &:hover {
      fill:  ${props=>darken(0.01, props.theme.background.idle)};
    };
    `
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
    timing: '2s' ,
    background: '#002635'}



export default StyledPad
