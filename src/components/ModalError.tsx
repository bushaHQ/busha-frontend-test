import React from 'react'

const ModalError:React.FC <{onClick: ()=> void }> = ({onClick}) => {
  return (
    <div className="error-modal-container">
        <div className="error-modal-message">
          <img src="error.svg" alt="error" className="error-modal-image" />
          <p> Network Error</p>
          <button className="error-modal-btn" onClick={onClick}>Try again</button>
        </div>
    </div>
  )
}

export default ModalError