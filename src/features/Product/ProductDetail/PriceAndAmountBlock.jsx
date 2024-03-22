import { styled } from '@mui/material';
import React, { useCallback, useState } from 'react';
import Seperator from '../../../shared/ui/SeparatorElement/Seperator';
import { Button } from '../../../shared/ui/Button/Button';
import {
    BasketIcon,
    FavoruiteIcon,
    MinusIcon,
    PlusIcon,
    SaveIcon,
} from '../../../shared/assets/icons';
import Switcher from '../../../shared/ui/Switcher/Switch';
import DisplayFlex from '../../../layout/DisplayFlex';
import { currency } from '../../../helpers/helpers';
import { useCart } from '../../../context/CartContext';

const PriceAndAmountBlock = ({ productData, setProductData }) => {
    const { price, stock, delivery } = productData;
    const [showCounter, setShowCounter] = useState(false);
    const [countProduct, setCountProduct] = useState(0);
    const { addToCart } = useCart();

    const changeOrderIsPacked = () => {
        setProductData({
            ...productData,
            stock: {
                ...productData.stock,
                orderIsPacked: !productData.stock.orderIsPacked,
            },
        });
    };

    const toggleCounter = () => {
        setShowCounter((prev) => !prev);
    };

    const handleAmountChange = useCallback((type) => {
        setCountProduct((prev) => {
            if (type === 'decrease') return prev > 0 ? prev - 1 : 0;
            if (type === 'increase') return prev + 1;
            return prev;
        });
    }, []);

    const saveProductToCart = () => {
        if (countProduct > 0) {
            const productToAdd = { ...productData, count: countProduct };
            addToCart(productToAdd);
            setCountProduct(0);
        }
    };

    return (
        <Block>
            <span className="price-without-discount">
                {price.originalPrice} цена без скидки
            </span>
            <DisplayFlex margin="20px 0" AI="center" gap="20px">
                <h1 className="price">122 566 {currency[price.currency]}</h1>
                <Discount> -{price.discountPercentage}% </Discount>
            </DisplayFlex>
            <DisplayFlex AI="center" JK="start" gap="10px">
                <Amount> {stock.available} штук в уп</Amount>{' '}
                <Switcher
                    changeOrderIsPacked={changeOrderIsPacked}
                    orderIsPacked={stock.orderIsPacked}
                />{' '}
                Заказ упаковкой
            </DisplayFlex>
            <Seperator margin="20px 0" width="100%" height="1px" />
            <DisplayFlex JK="start">
                <ListItem>
                    <strong>Завтра</strong>
                    <span>Доставка</span>
                </ListItem>
                <ListItem>
                    <strong>{delivery.tomorrow} </strong>
                    <span>Тарасовка</span>
                </ListItem>
                <ListItem>
                    <strong>{delivery.pickup}</strong>
                    <span>Тарасовка</span>
                </ListItem>
            </DisplayFlex>

            <DisplayFlex margin="10px 0 0 0" gap="10px">
                {!showCounter ? (
                    <Button
                        onClick={toggleCounter}
                        className="basket-button"
                        backgroundColor={'#1551e5'}
                    >
                        <StyledBasketIcon /> В корзину
                    </Button>
                ) : (
                    <Button
                        showCounter={showCounter}
                        className="basket-button"
                        backgroundColor={'#FFFFFF'}
                    >
                        <DisplayFlex width="100%" JK="space-between">
                            <MinusIcon
                                onClick={() => handleAmountChange('decrease')}
                            />
                            <span className="count-product">
                                {countProduct}
                            </span>
                            <PlusIcon
                                onClick={() => handleAmountChange('increase')}
                            />
                        </DisplayFlex>
                    </Button>
                )}

                {showCounter ? (
                    <Button
                        onClick={toggleCounter}
                        backgroundColor="#F2F6FF"
                        fullWidth
                    >
                        <SaveIcon onClick={saveProductToCart} />
                    </Button>
                ) : null}

                <Button
                    className="add-to-favoruite-button"
                    backgroundColor="#F2F6FF"
                    fullWidth
                >
                    <FavoruiteIcon />
                </Button>
            </DisplayFlex>
        </Block>
    );
};

export default React.memo(PriceAndAmountBlock);

const Block = styled('section')`
    width: 400px;
    .disabled-save-button {
        fill: gray;
    }
    .price-without-discount {
        color: #ff3d71;
    }
    .basket-button {
        display: flex;
        justify-content: center;
        width: 300px;
        border: 2px solid #1551e5;
        .count-product {
            color: black;
        }
    }
    .container-buttons {
        display: flex;
        justify-content: space-between;
    }
    .add-to-favoruite-button {
        rect {
            fill: var(--main-color);
        }
    }
    .MuiFormControlLabel-root {
        margin: 0;
    }
    .price {
        font-size: 2.1rem;
    }
`;

const StyledBasketIcon = styled(BasketIcon)`
    path {
        fill: #ffffff;
    }
`;

const Discount = styled('strong')`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff3d71;
    color: white;
    width: 60px;
    height: 25px;
    border-radius: 7px;
`;

const Amount = styled('strong')`
    display: flex;
    align-items: center;
    background-color: #f2f6ff;
    color: #828ead;
    padding: 3px 10px;
    border-radius: 7px;
`;

const ListItem = styled('li')`
    min-width: 130px;
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    span {
        font-size: 0.8rem;
        color: #828ead;
    }
`;
