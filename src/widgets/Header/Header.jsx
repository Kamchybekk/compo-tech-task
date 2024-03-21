import React from 'react';
import { styled } from '@mui/material';
import logo from '../../shared/assets/images/logo.png';
import { Button } from '../../shared/ui/Button/Button';
import {
    BasketIcon,
    FavoruiteIcon,
    MenuIcon,
    NotificationIcon,
} from '../../shared/assets/icons';
import { Input } from '../../shared/ui/Input/Input';

const Header = () => {
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
            <NotificationIcon />
            <FavoruiteIcon />
            <Button
                color="#1551e5"
                backgroundColor="#F2F6FF"
                icon={<BasketIcon />}
                variant=""
            >
                144 235₽
            </Button>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled('header')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
    border-bottom: 1px solid #e2e4f0;
    .container-input {
        width: 500px;
    }
`;

const Logo = styled('img')``;
