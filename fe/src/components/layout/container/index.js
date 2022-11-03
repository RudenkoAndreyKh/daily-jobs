import React from 'react';
import styled from "styled-components";
import media from "../../styles/media";

const Wrapper = styled.div`
    width: 100%;
    padding: 0 8rem;

    ${media.toExtraLarge`
        padding: 0 1rem;
    `}
`;

const Container = ({children}) => {
    return <Wrapper>
        {children}
    </Wrapper>
}

export default Container;