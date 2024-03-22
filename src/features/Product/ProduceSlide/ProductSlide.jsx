import React, { useState } from 'react';

import { styled } from '@mui/material';
import { Button } from '../../../shared/ui/Button/Button';
import { ArrowIcon } from '../../../shared/assets/icons';

export default function ImageSlider({ images = [] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <SliderContainer>
            <MainImage src={images[currentIndex]} alt="Selected" />
            <ThumbnailsContainer>
                <Button
                    className="slide-button"
                    next
                    backgroundColor="#F2F6FF"
                    onClick={() =>
                        goToImage(
                            (currentIndex - 1 + images.length) % images.length
                        )
                    }
                >
                    <StyledArrowIcon direction="left" />
                </Button>
                {images.map((img, index) => (
                    <Thumbnail
                        key={img}
                        src={img}
                        onClick={() => goToImage(index)}
                        className={currentIndex === index ? 'active' : ''}
                        alt={`Thumbnail ${index + 1}`}
                    />
                ))}
                <Button
                    className="slide-button"
                    backgroundColor="#F2F6FF"
                    onClick={() =>
                        goToImage((currentIndex + 1) % images.length)
                    }
                >
                    <StyledArrowIcon direction="right" />
                </Button>
            </ThumbnailsContainer>
        </SliderContainer>
    );
}

const SliderContainer = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MainImage = styled('img')`
    width: 100%;
    max-width: 400px;
    border-radius: 30px;
`;

const ThumbnailsContainer = styled('div')`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 10px 0;
    .slide-button {
        padding: 0 10px;
    }
`;

const Thumbnail = styled('img')`
    width: 60px;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s;

    &.active {
        opacity: 1;
        border: 2px solid blue;
    }
`;

const StyledArrowIcon = styled(ArrowIcon)`
    transform: rotate(
        ${(props) => (props.direction === 'left' ? '-90deg' : '90deg')}
    );
`;
