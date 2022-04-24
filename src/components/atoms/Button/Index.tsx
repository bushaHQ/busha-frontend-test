import { VoidFunctionComponent } from 'react';
import './Button.scss';

interface ButtonProps {
    buttonLabel: string;
    onClick: () => void;
}

const Button: VoidFunctionComponent<ButtonProps> = ({ buttonLabel = "Click", onClick }) => {
    return (
        <button className="button" onClick={onClick}>{buttonLabel}</button>
    )
}

export default Button;
