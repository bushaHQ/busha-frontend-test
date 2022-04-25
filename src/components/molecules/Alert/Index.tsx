import { ReactNode, useEffect, useState, VoidFunctionComponent } from "react";
import './Alert.scss'

interface AlertProps {
    variant?: string;
    children: ReactNode;
}

const Alert: VoidFunctionComponent<AlertProps> = ({variant='error', children}) => {
    return (
         <div className={`alert alert-${variant}`}>
          {children}
        </div>
    )
}
  
export default Alert