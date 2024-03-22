import { styled } from '@mui/material';
import React from 'react';

const Description = ({ description }) => {
    return (
        <Block>
            <h2>Описание товара</h2>
            <p>{description}</p>
        </Block>
    );
};

export default Description;

const Block = styled('div')`
    p {
        color: #071435;
    }
`;
