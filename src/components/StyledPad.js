import styled , { keyframes, css } from 'styled-components'
import sample from 'lodash.sample'
import polished from 'polished'
import PropTypes from 'prop-types'
import {background} from '../config/styles'

const colors = {
  0: '#002635',
  1: '#013440',
  2: '#AB1A25',
  3: '#D97925',
  4: '#EFE7BE'
}
const colors2 =["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94", "#e377c2", "#f7b6d2", "#7f7f7f", "#c7c7c7", "#bcbd22", "#dbdb8d", "#17becf", "#9edae5"]




const StyledPad = styled.div`
${(props) => {
if (props.isPlaying) {
  // Returning a template literal with interpolations? You need to use `css`
  return css`
    background: ${sample(colors2)}
    transition: background 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)  ;
  `;
} else {
  // Returning a standard string? No need to use `css`
  return css`
    background: ${colors[0]}
    opacity: ${ props => props.isActive ? '0.8': '1' }
  `;
}
}};
width: 8vh;
max-width: 12.5%;
height: 8vh;
cursor: pointer;
&:hover {
  background-color: ${sample(colors)}
  }
  `
  StyledPad.defaultProps = {
    colors:colors2,
    background: 'default'
  };


StyledPad.propTypes = {
  isPlaying: PropTypes.bool,
  isActive: PropTypes.bool
}
export default StyledPad
