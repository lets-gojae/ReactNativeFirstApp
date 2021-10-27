import {css} from 'styled-components';

export const Mixin = {
  flexSet: (
    justifyContent = 'center',
    alignItems = 'center',
    flexDirection = 'column',
  ) => css`
    display: flex;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-direction: ${flexDirection};
  `,
};
