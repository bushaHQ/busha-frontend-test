import { VoidFunctionComponent } from "react";
import Error from '../../components/molecules/Error/Index'
import './Prices.scss'

const Prices: VoidFunctionComponent<any> = () => {
    return (
         <div className="price">
             <Error 
                message="Network Error" 
                buttonLabel="Try again" 
                handleError={() =>{}}
            />  
        </div>
    )
}
  
export default Prices