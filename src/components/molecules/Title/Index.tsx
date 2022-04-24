import { ReactNode, VoidFunctionComponent } from 'react';
import './Title.scss';

export interface TitleProps {
    title: string;
    append?: ReactNode;
}

const Title: VoidFunctionComponent<TitleProps> = ({ title, append }) => {

    return (
        <div className="title__body">
           {append}
            <div>
                <p className="title">{title}</p>
            </div>
        </div>
    )
}

export default Title;
