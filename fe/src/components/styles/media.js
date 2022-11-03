import { css } from 'styled-components';
import { dimensions } from "./values";
import inRange from 'lodash/inRange';

const query = (min, max) => {
    const rules = [];
    if (Number.isInteger(min)) rules.push(`(min-width: ${min}px)`);
    if (Number.isInteger(max)) rules.push(`(max-width: ${max - 1}px)`);
    return `@media ${rules.join(' and ')}`;
};

export const createMediaQuery = (min, max) => {
    return (...args) => css`
        ${props => {
            const forcedWidth = props.theme && props.theme.forcedWidth;
            if (forcedWidth) {
                if (!inRange(forcedWidth, min, (max || Infinity))) return null;
                return css`${query(0)} { ${css(...args)} }`;
            }
            return css`${query(min, max)} { ${css(...args)} }`;
        }}
    `;
};

export default {
    small: createMediaQuery(dimensions.small),
    medium: createMediaQuery(dimensions.medium),
    large: createMediaQuery(dimensions.large),
    mediumLarge: createMediaQuery(dimensions.mediumLarge),
    extraLarge: createMediaQuery(dimensions.extraLarge),

    toSmall: createMediaQuery(0, dimensions.small),
    toMedium: createMediaQuery(0, dimensions.medium),
    toLarge: createMediaQuery(0, dimensions.large),
    toMediumLarge: createMediaQuery(0, dimensions.mediumLarge),
    toExtraLarge: createMediaQuery(0, dimensions.extraLarge),

    mediumOnly: createMediaQuery(dimensions.medium, dimensions.large),
    mediumLargeOnly: createMediaQuery(dimensions.mediumLarge, dimensions.large),
};
