import { InputBase, styled } from '@mui/material';
import React, { forwardRef, useState } from 'react';
import { RemoveIcon, SearchIcon } from '../../assets/icons';

export const Input = forwardRef((props, ref, value, setValue) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <ContainerInput className={isFocused ? 'focused' : ''}>
            <StyledInput
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                value={value}
                setValue={(e) => setValue(e.target.value)}
                inputRef={ref}
                placeholder="Название адреса "
                {...props}
            >
                {props.children}
            </StyledInput>
            <RemoveIcon />
            <SearchIcon />
        </ContainerInput>
    );
});

const ContainerInput = styled('div')`
    display: flex;
    align-content: center;
    border: 1px solid #c7c7cc;
    border-radius: 8px;
    padding: 7px 15px;
    transition: border 0.1s linear;
    &.focused {
        border: 2px solid var(--main-color);
    }
`;

const StyledInput = styled(InputBase)`
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
    background: #ffffff;
    .input {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: #151515;
        cursor: ${(props) => (props.pointer ? 'pointer' : '')};
    }
    &.error {
        border-color: #ff3b30;
    }
`;
