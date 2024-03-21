import React from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const breadcrumbs = [
    { text: 'Каталог', link: '/catalog' },
    { text: 'Обувь', link: '/shoes' },
    { text: 'Кроссовки', link: '/sneakers' },
    { text: 'Беговые', link: '/running' },
];

const BreadcrumbsContainer = styled('nav')`
    font-size: 16px;
    color: #646464;
`;

const BreadcrumbLink = styled(Link)`
    color: inherit;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    &:not(:last-child):after {
        content: ' / ';
        padding: 0 8px;
    }
`;

export default function Breadcrumbs() {
    return (
        <BreadcrumbsContainer aria-label="breadcrumb">
            {breadcrumbs.map((crumb, index) => (
                <BreadcrumbLink key={index} to={crumb.link}>
                    {crumb.text}
                </BreadcrumbLink>
            ))}
        </BreadcrumbsContainer>
    );
}
