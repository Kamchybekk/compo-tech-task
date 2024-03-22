import React, { useState } from 'react';
import { styled } from '@mui/material';
import { Button } from '../../shared/ui/Button/Button';
import { menuItems } from '../../helpers/helpers';
import { rightMenuItems } from '../../helpers/helpers';

export default function Navbar() {
    const [active, setActive] = useState('manager');

    return (
        <Nav>
            <MenuList>
                {menuItems.map((item) => (
                    <MenuItem key={item.name}>
                        <a href={item.link}>{item.name}</a>
                    </MenuItem>
                ))}
            </MenuList>
            <RightMenu>
                {rightMenuItems.map((item) => (
                    <Button
                        gap="10px"
                        key={item.id}
                        as="a"
                        href="#"
                        onClick={() => setActive(item.id)}
                        backgroundColor={active === item.id ? '#F2F6FF' : ''}
                        color="#1551e5"
                    >
                        {item.icon} {item.name}
                    </Button>
                ))}
            </RightMenu>
        </Nav>
    );
}

const Nav = styled('nav')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 25px;
    border-bottom: 1px solid #e2e4f0;
`;

const MenuList = styled('ul')`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    gap: 20px;
`;

const MenuItem = styled('li')`
    a {
        color: black;
    }
`;

const RightMenu = styled('div')`
    display: flex;
    gap: 10px;
`;
