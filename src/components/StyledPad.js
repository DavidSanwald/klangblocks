import styled, { css } from 'styled-components'
import sample from 'lodash.sample'
import { darken } from 'polished'
import PropTypes from 'prop-types'
import { background } from '../config/styles'

const StyledPad = styled.div`
${props => {
  switch (props.state) {
    case 'playing':
      return css`
    background: ${sample(background.playing)};
    transition: background ${props.timing} cubic-bezier(0.175, 0.885, 0.32, 1.275);
  `
    case 'idle':
      return css`
    background: ${background.idle};
    transition: background ${props.timing} cubic-bezier(0.175, 0.885, 0.32, 1.275);

`
    case 'selected':
      return css`
     background: ${darken(0.02, background.idle)};
     transition: background ${props.timing} cubic-bezier(0.175, 0.885, 0.32, 1.275);
     `
    default:
      return css`
    background: ${background.idle};
   `
  }
}};
width:  ${props => props.width};
max-width: ${props => props.maxwidth};
height: ${props => props.height};
cursor: pointer;
&:hover {
  background: ${darken(0.01, background.idle)};
  }
  `

StyledPad.propTypes = {
  state: PropTypes.oneOf(['idle', 'playing', 'selected']).isRequired,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.string,
  maxwidth: PropTypes.string,
  height: PropTypes.string,
  timing: PropTypes.string,
}


StyledPad.defaultProps = {
  width: '8vh',
  maxwidth: '12.5%',
  height: '8vh',
  timing: '1s' ,
}

export default StyledPad
