import React from 'react';
import { styled } from '@mui/material';

const Seperator = ({ width, height, margin }) => {
    return (
        <StyledSeparatorElement width={width} height={height} margin={margin} />
    );
};

export default Seperator;

const StyledSeparatorElement = styled('div')`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.margin};
    background-color: #e2e4f0;
`;
