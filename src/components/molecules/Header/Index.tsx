import { ReactNode, VoidFunctionComponent } from 'react';
import './Header.scss';

interface HeaderProps {
    title: string;
    subtitle?: string;
    append?: ReactNode;
    titleClassName?: string;
    subtitleClassName?: string;
    headerClassName?: string;
}

const Header: VoidFunctionComponent<HeaderProps> = ({ 
    title, 
    subtitle, 
    append, 
    titleClassName, 
    subtitleClassName,
    headerClassName,
}) => (
    <div className={`header ${headerClassName}`}>
        <h3 className={titleClassName}>{title}</h3>
        <p className={subtitleClassName}>{subtitle}</p>
        {append}
    </div>
);

export default Header;
