import { VoidFunctionComponent } from "react";
import Error from '../../components/molecules/Error/Index'
import Header from '../../components/molecules/Header/Index'
import './Prices.scss'

const Prices: VoidFunctionComponent<any> = () => {
    return (
         <div>
             <Header title="Prices" />
             <div className="price">
                <Error 
                    message="Network Error" 
                    buttonLabel="Try again" 
                    handleError={() =>{}}
                /> 
             </div>
              
        </div>
    )
}
  
export default Prices