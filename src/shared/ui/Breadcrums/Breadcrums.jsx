import React from 'react';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import { breadcrumbs } from '../../../helpers/constants';

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

const BreadcrumbsContainer = styled('nav')`
    padding: 17px 25px;
    font-size: 16px;
    color: #646464;
    a {
        cursor: pointer;
    }
`;

const BreadcrumbLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    &:not(:last-child):after {
        content: ' / ';
        padding: 0 8px;
    }
`;
