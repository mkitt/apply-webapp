// @flow
import { css } from 'glamor'

export const ANIMATE_ROTATE = css.keyframes('ANIMATE_ROTATE', {
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(720deg)' },
})

export const COLORS = {
  BLUE: '#35c5fc',
  BLACK: '#000',
  GREY_4: '#4d4d4d',
  GREY_6: '#666',
  GREY_8: '#808080',
  GREY_9: '#999',
  GREY_C: '#ccc',
  GREY_E: '#e5e5e5',
  WHITE: '#fff',
  LIGHT_GREEN: '#8ad30e',
}
// check for Black and white

export const EASE = {
  IN_OUT: 'cubic-bezier(0.23, 1, 0.32, 1)',
  IN_OUT_QUART: 'cubic-bezier(0.77, 0, 0.175, 1)',
  IN_OUT_CUBIC: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
}

export const MQ = {
  MIN_BREAK_48: '@media (min-width: 48em)',
}
