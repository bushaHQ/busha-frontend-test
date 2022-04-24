import { PropsWithChildren, VoidFunctionComponent } from "react";
import './Alert.scss'

const Alert: VoidFunctionComponent<any> = (props: PropsWithChildren<any>) => {
    return (
         <div className="alert">
          {props.children}
        </div>
    )
}
  
export default Alert