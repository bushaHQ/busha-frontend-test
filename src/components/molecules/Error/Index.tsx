import { VoidFunctionComponent } from "react";
import ExclamationIcon from "../../../assets/icons/ExclamationIcon";
import Button from '../../atoms/Button/Index'
import './Error.scss'

interface ErrorProps {
    message: string;
    buttonLabel: string;
    handleError: () => void;
}

const Error: VoidFunctionComponent<ErrorProps> = ({ message, buttonLabel, handleError }) => {
    return (
         <div className="error">
             <div className="error__message">
                 <div className="error__message-body">
                     <ExclamationIcon />
                     <p>{message}</p>
                 </div>
                 
             </div>
             <div className="error__button">
                 <Button 
                    onClick={handleError} 
                    buttonLabel={buttonLabel}
                 />
             </div>
        </div>
    )
}
  
export default Error