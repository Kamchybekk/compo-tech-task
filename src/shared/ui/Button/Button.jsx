import React from 'react';
import { styled } from '@mui/material';

export const Button = ({
    size,
    disabled,
    variant,
    children,
    icon,
    fullWidth,
    loading,
    ...otherProps
}) => {
    return (
        <StyledButton
            size={size}
            fullWidth={fullWidth}
            variant={variant}
            {...otherProps}
        >
            {icon}
            {children}
        </StyledButton>
    );
};

const StyledButton = styled('button')`
    display: flex;
    align-items: center;
    gap: 7px;
    color: ${(props) => (props.color ? props.color : '#FFFFFF')};
    background-color: ${(props) => props.backgroundColor};
    min-width: 117;
    min-height: 40;
    border-radius: 8px;
    padding: 13px 25px;
    border: none;
    outline: none;
    transition: 0.1s linear;
    :hover {
        box-shadow: 0px 4px 14px 1px rgba(21, 81, 229, 0.52);
        -webkit-box-shadow: 0px 4px 14px 1px rgba(21, 81, 229, 0.52);
        -moz-box-shadow: 0px 4px 14px 1px rgba(21, 81, 229, 0.52);
    }
`;
