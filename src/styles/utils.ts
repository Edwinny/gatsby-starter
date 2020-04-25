import { stripUnit } from 'polished';
import { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import { breakpoints, variables } from './variables';

export function responsiveFont(
  minSize?: number | string,
  size?: number | string,
  limit?: number | string
) {
  return (props: unknown): FlattenInterpolation<ThemeProps<never>> => {
    minSize = stripUnit(minSize ?? variables.font.sizeMin);
    size = stripUnit(size ?? variables.font.size);
    limit = limit ?? variables.pageLimit();
    if (typeof limit === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      limit = (limit as any)(props);
    }

    const baseline = stripUnit(breakpoints.sm);
    const fontMultiplier =
      ((size as number) - (minSize as number)) / (stripUnit(limit as number) - baseline);
    const fontBaseline = (minSize as number) - fontMultiplier * baseline;

    return css`
      font-size: ${minSize}px;
      font-size: calc(${minSize}px * var(--scale-font));

      @media (min-width: ${breakpoints.sm}) {
        font-size: ${minSize}px;
        font-size: calc(
          ${fontMultiplier} * 100vw + (${fontBaseline}px * var(--scale-font))
        );
      }

      @media (min-width: ${variables.pageLimit}) {
        font-size: ${minSize}px;
        font-size: calc(${size}px * var(--scale-font));
      }
    `;
  };
}
