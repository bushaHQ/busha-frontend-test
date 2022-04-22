import { PropsWithChildren, VoidFunctionComponent } from "react";
import './Card.scss'

const Card: VoidFunctionComponent<any> = (props: PropsWithChildren<any>) => {
    return (
         <div className="card">
          {props.children}
        </div>
    )
}
  
export default Card