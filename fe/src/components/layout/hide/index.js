import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { dimensions } from '../../styles/values';

const breakpoints = {
    small: `${dimensions.small}px`,
    medium: `${dimensions.medium}px`,
    mediumLarge: `${dimensions.mediumLarge}px`,
    large: `${dimensions.large}px`,
    extraLarge: `${dimensions.extraLarge}px`,
};

const maxBreakpoints = {
    medium: `${dimensions.medium}px`,
    mediumLarge: `${dimensions.mediumLarge}px`,
    large: `${dimensions.large}px`,
    extraLarge: `${dimensions.extraLarge}px`,
};

const Hide = styled(({ children, className, ...props }) => {
    /*if we don't have children we shouldn't return component, it is redundant*/
    if(!children){
        return null;
    }
    const element = React.Children.only(children);
    const newClassName = element.props.className
        ? [element.props.className, className].join(' ')
        : className;
    delete props.to;
    delete props.from;
    return React.cloneElement(element, {
        ...element.props,
        ...props,
        className: newClassName,
    });
})`
    @media (min-width: ${props => get(breakpoints, props.from) || 0}) ${props =>
        props.to &&
        css`and (max-width: ${props => get(maxBreakpoints, props.to)})`} {
        display: none !important;
    }
`;

Hide.propTypes = {
    from: PropTypes.string,
    to: PropTypes.string,
}

export default Hide;