import React from 'react';
import { styled } from '@mui/material';
import { CharacteristicItems } from '../../../helpers/constants';

// export const CharacteristicItems = [
//     { id: 2, code: 'ELC00696', description: 'Код поставщика' },
//     { id: 1, code: 'ELC02000000696', description: 'Артикул' },
//     { id: 3, code: 'ELC00696', description: 'Код РАЗК' },
//     { id: 3, code: 'ELC00696', description: 'Код ETM' },
//     { id: 4, code: 'Electric used', description: 'Бренд' },
//     { id: 6, code: 'ELC00696', description: 'Серия' },
//     { id: 5, code: 'ELC00696', description: 'Код производителя' },
// ];

const Characteristic = ({ characteristics }) => {
    const { itemCode, postingCode, EAN, brand, series, vendorCode } =
        characteristics;

    return (
        <div>
            <h3>Характеристики</h3>
            <StyledList>
                <ListItem>
                    <strong>{itemCode}</strong>
                    <span>Код поставщика</span>
                </ListItem>
                <ListItem>
                    <strong>{vendorCode}</strong>
                    <span>Артикул</span>
                </ListItem>
                <ListItem>
                    <strong>{itemCode}</strong>
                    <span>Код РАЗК</span>
                </ListItem>
                <ListItem>
                    <strong>{itemCode}</strong>
                    <span>Код ETM</span>
                </ListItem>
                <ListItem>
                    <strong>{brand}</strong>
                    <span>Бренд</span>
                </ListItem>
                <ListItem>
                    <strong>{series}</strong>
                    <span>Серия</span>
                </ListItem>
                <ListItem>
                    <strong>{itemCode}</strong>
                    <span>Код производителя</span>
                </ListItem>
            </StyledList>
        </div>
    );
};

export default Characteristic;

const StyledList = styled('ul')`
    padding-right: 50px;
    width: 500px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

const ListItem = styled('li')`
    min-width: 200px;
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    span {
        font-size: 0.8rem;
        color: #828ead;
    }
`;
