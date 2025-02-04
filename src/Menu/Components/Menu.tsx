import { FC } from 'react';
import { IMenuProps } from '../Interface/Imenu';
import { Typography } from '@mui/material';

const Menu: FC<IMenuProps> = ({ pages }) => {
    return (
        <nav className="menu-container">
            {pages.map((page, index) => (
                <a key={index} href={page.path} className="menu-item">
                    {page.icon}
                    <Typography variant="caption">{page.label}</Typography>
                </a>
            ))}
        </nav>
    );
};

export default Menu;