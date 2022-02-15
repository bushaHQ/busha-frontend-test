import React from 'react'

const Error:React.FC <{onClick: ()=> void }> = ({onClick}) => {
  return (
    <div className="error-container">
      <h1 className="heading">Wallets</h1>
        <div className="error-message">
          <img src="error.svg" alt="error" className="error-image" />
          <p> Network Error</p>
          <button className="error-btn" onClick={onClick}>Try again</button>
        </div>
    </div>
  )
}

export default Error