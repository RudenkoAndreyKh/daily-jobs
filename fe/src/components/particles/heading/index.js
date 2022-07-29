import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fontSize, fontWeight, lineHeight } from '../../styles/value-to-style-convertor';

const NON_FORWARDED_PROPS = {
    'size': true,
    'spacing': true,
    'color': true,
};

export const Heading = styled.h1.withConfig({
    // Prevent these props from being forwarded to the DOM element as attributes.
    shouldForwardProp: (prop, defaultValidatorFn) => !NON_FORWARDED_PROPS[prop] && defaultValidatorFn(prop),
}).attrs(({ level }) => ({
    // Set the element type to h1-6, legend, or p depending on the level prop.
    as: level >= 1 && level <= 6 ? `h${Math.floor(level)}` : level === 'legend' ? level : 'p',
}))`
    margin: 0;
    padding: 0;

    font-size: ${props => fontSize(props.size)};
    line-height: ${props => lineHeight(props.size)};
    font-weight: ${props => fontWeight(props.weight)};

    ${props => props.caps && `
        text-transform: uppercase;
        letter-spacing: 1.25px;
    `}

    ${props => props.shadow && `
        text-shadow: 0 1px 2px rgba(0,0,0,.5);
    `}

    ${props => !!props.color && `
        color: ${props.color};
    `}

    ${props => props.centered && 'text-align: center;'};
`;

Heading.defaultProps = {
    size: 0.75, 
    weight: 8,
    level: 'p',
};

Heading.propTypes = {
    children: PropTypes.any,

    level: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    size: PropTypes.number,

    caps: PropTypes.bool,
    weight: PropTypes.number,
    shadow: PropTypes.bool,
    centered: PropTypes.bool,
};

export default Heading;