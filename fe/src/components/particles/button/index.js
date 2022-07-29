import React from 'react';

const Button = ({label}) => {
    return <button data-testid="button">
        {label}
    </button>
};

export default Button;