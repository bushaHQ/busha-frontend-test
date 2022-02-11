import Vector from './images/Vector.png';
import Arrow from './images/Arrow.png';

interface Data {
    name: string;
    balance: string;
    currency: string;
    deposit: boolean;
    hold: string;
    id: string;
    imgURL: string;
    payout: boolean;
    pending_balance: string;
    type: string;
}

interface Response {
    response:Array<Data>;
}

const CardFlow = ({response}:Response) => {
    return (
        <div className="grid-container">
            {response.map((res)=> (
                <div className="grid-child" key={res.id} >
                <div>
                    <span className="wallet-logo">
                        <img src={res.imgURL} alt='' height={34} width={34} />
                        <span className="wallet-name">{res.name}</span>
                    </span>
                    <div className="wallet-price">
                        {res.balance} {res.currency}
                    </div>
                    <div className="card-footer">
                        <img src={Arrow} alt=""  className='card-btn'/>
                    </div>
                </div>
                <img src={Vector} alt="" className='card-img-bg' />
            </div>
            ))}
        </div>
    )
}
export type {Data};
export default CardFlow;