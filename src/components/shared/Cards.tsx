import React from 'react'
import "../styles/main.css"

function Cards() {
  return (
    <div>
        <div className='container'>
            <ul>
                <li className='wall'> <a href="/">Wallets</a> </li>
                <li className='wish'> <a href="/">Prices</a></li>
                <li className='wish'> <a href="/">Peer2Peer</a></li>
                <li className='wish'> <a href="/">Activity</a></li>
                <li className='wish'> <a href="/">Settings </a></li>
            </ul>
            <h2 className='top'>Wallets</h2>
            <a id='overlay' className='be' href="/"><p className='new'>+ Add new wallet</p></a>
            <div className='line'> </div>

        </div>
    
        <div className='card'>
            <div className='card1'>
                <div className='rub'>
                    <div className='circle'> <img src="naira2.png" alt="" /> </div>
                    <p className='nai'>Naira</p>
                </div>
                <p className='money'>#105,160,076.51</p>
                <img className= 'forward'src="forward3.png" alt="" />
            </div>
        </div>

        <div className='card'>
            <div className='card2'>
                <div className='rub'>
                    <div className='circle2'> <img src="BITCOIN2.png" alt="" /> </div>
                    <p className='nai'>Bitcoin</p>
                </div>
                <p className='money'>10.3649447683 BTC</p>
                <img className= 'forward'src="forward3.png" alt="" />
            </div>
        </div>
        
        <div className='card'>
            <div className='card3'>
                <div className='rub'>
                    <div className='circle3'> <img src="ethereum2.png" alt="" /> </div>
                    <p className='nai'>Ethereum</p>
                </div>
                <p className='money'>10.36490987 ETH</p>
                <img className= 'forward'src="forward3.png" alt="" />
            </div>
        </div>

        <div className='card'>
            <div className='card4'>
                <div className='rub'>
                    <div className='circle4'> <img src="litecoin2.png" alt="" /> </div>
                    <p className='nai'>Litecoin</p>
                </div>
                <p className='money'>10.55667788 LTC</p>
                <img className= 'forward'src="forward3.png" alt="" />
            </div>
        </div>

        <div id='lay'></div>
    </div>
  )
}

export default Cards;