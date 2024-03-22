import React from 'react';
import { styled } from '@mui/material';
import logo from '../../shared/assets/images/logo.png';
import { Button } from '../../shared/ui/Button/Button';
import {
    ArrowIcon,
    BasketIcon,
    FavoruiteIcon,
    MenuIcon,
    NotificationIcon,
} from '../../shared/assets/icons';
import { Input } from '../../shared/ui/Input/Input';
import avatarImage from '../../shared/assets/images/Avatar.png';
import Seperator from '../../shared/ui/SeparatorElement/Seperator';
import { useCart } from '../../context/CartContext';

const Header = () => {
    const { totalPrice } = useCart();
    return (
        <StyledHeader>
            <Logo src={logo} />
            <Button
                backgroundColor="#1551e5"
                icon={<MenuIcon />}
                variant="contained"
            >
                Меню
            </Button>
            <div className="container-input">
                <Input fullWidth placeholder="Название запроса" />
            </div>
            <div className="container-buttons">
                <button>
                    <NotificationIcon />
                </button>
                <Seperator width="1px" height="45px" />
                <button>
                    <FavoruiteIcon />
                </button>
            </div>

            <Button
                color="#1551e5"
                backgroundColor="#F2F6FF"
                icon={<BasketIcon />}
                variant=""
            >
                {totalPrice.toLocaleString('ru-RU')} ₽
            </Button>

            <Avatar src={avatarImage} />
            <span>Ермаков. K</span>
            <StyledArrowIcon />
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled('header')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 25px;
    border-bottom: 1px solid #e2e4f0;
    .container-input {
        width: 550px;
    }
    .container-buttons {
        display: flex;
        align-items: center;
        gap: 12px;
        button {
            background: none;
            border: none;
            outline: none;
        }
    }
`;

const Logo = styled('img')``;

const Avatar = styled('img')`
    width: 50px;
    height: 50px;
`;

const StyledArrowIcon = styled(ArrowIcon)`
    cursor: pointer;
    transform: rotate(180deg);
`;
