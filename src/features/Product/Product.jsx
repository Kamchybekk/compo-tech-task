import React from 'react';
import ImageSlider from './ProduceSlide/ProductSlide';
import Characteristic from './ProductDetail/CharacteristicBlock';
import { styled } from '@mui/material';
import PriceAndAmountBlock from './ProductDetail/PriceAndAmountBlock';
import Description from './ProductDetail/Description';
import Seperator from '../../shared/ui/SeparatorElement/Seperator';

const Product = ({ productData, setProductData }) => {
    return (
        <ProductContainer>
            <ImageSlider images={productData.images} />
            <div className="product-detail-info-block">
                <div className="characteristic-price-block">
                    <PriceAndAmountBlock
                        setProductData={setProductData}
                        productData={productData}
                    />
                    <Seperator width="1px" height="350px" margin="0 35px" />
                    <Characteristic
                        characteristics={productData.characteristics}
                    />
                </div>
                <Description description={productData.description} />
            </div>
        </ProductContainer>
    );
};

export default Product;

const ProductContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    margin: 23px 0;
    .characteristic-price-block {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .product-detail-info-block {
        padding: 0 50px;
    }
`;
