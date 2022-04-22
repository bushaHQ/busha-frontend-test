import { VoidFunctionComponent } from "react";
import ExclamationIcon from "../../../assets/icons/ExclamationIcon";
import './Error.scss'

interface ErrorProps {
    message: string;
    buttonLabel: string;
    handleError: () => void;
}

const Error: VoidFunctionComponent<ErrorProps> = ({message, buttonLabel, handleError}) => {
    return (
         <div className="error">
             <div className="error__message">
                 <div className="error__message-body">
                     <ExclamationIcon />
                     <p>{message}</p>
                 </div>
                 
             </div>
             <div className="error__button">
                 <button onClick={handleError}>{buttonLabel}</button>
             </div>
        </div>
    )
}
  
export default Error