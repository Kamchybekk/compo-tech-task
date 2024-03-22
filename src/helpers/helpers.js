import { MessengerIcon, PercentIcon } from '../shared/assets/icons';

export const menuItems = [
    { name: 'Мои заказы', link: '#' },
    { name: 'Сотрудники', link: '#' },
    { name: 'Шаблоны заказов', link: '#' },
    { name: 'Обращения', link: '#' },
];

export const rightMenuItems = [
    { name: 'Ваш менеджер', id: 'manager', icon: <MessengerIcon /> },
    { name: 'Акции', id: 'actions', icon: <PercentIcon /> },
    { name: 'Блог', id: 'blog' },
];

export const breadcrumbs = [
    { text: 'Каталог', link: '/catalog' },
    { text: 'Обувь', link: '/shoes' },
    { text: 'Кроссовки', link: '/sneakers' },
    { text: 'Беговые', link: '/running' },
];

export const currency = {
    RUB: '₽',
    USD: '$',
    EUR: '€',
};
