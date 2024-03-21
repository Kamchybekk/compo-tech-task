import React, { forwardRef, useState } from 'react';
import { TextField, styled, InputAdornment } from '@mui/material';
import { SearchIcon } from '../../assets/icons';
import { RemoveIcon } from '../../assets/icons';

export const Input = forwardRef(({ onChange, ...props }, ref) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        if (onChange) {
            onChange(event);
        }
    };

    return (
        <StyledInput
            size="small"
            variant="outlined"
            onChange={handleChange}
            value={value}
            placeholder="Название адреса"
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        {value && (
                            <StyledRemoveIcon onClick={() => setValue('')} />
                        )}
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            inputProps={{
                'aria-label': 'название адреса',
            }}
            ref={ref}
            {...props}
        />
    );
});

const StyledInput = styled(TextField)`
    flex: 1;
    font-family: 'Montserrat', sans-serif;
    .MuiInputBase-input {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: #151515;
        cursor: ${(props) => (props.pointer ? 'pointer' : 'text')};
        &.focused {
            font-weight: bold;
            color: #1551e5;
        }
    }
    .MuiOutlinedInput-root {
        padding: 5px 10px;
        border-radius: 7px;
        &:hover .MuiOutlinedInput-notchedOutline {
            border-color: rgba(0, 0, 0, 0.23);
        }
        &.Mui-focused .MuiOutlinedInput-notchedOutline {
            border-color: #1551e5;
            border-width: 3px;
        }
    }
`;

const StyledRemoveIcon = styled(RemoveIcon)({
    cursor: 'pointer',
});
