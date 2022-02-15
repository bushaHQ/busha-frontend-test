import React, {useState} from 'react'

const PostError = () => {
    const [isClosed, setIsClosed] =useState(false);
    const handleClick = () => {
        setIsClosed(true);
    }

  return (
    <div className={isClosed? "close" : "post-error-container"} >
        <img src="/post-error.svg" alt="post error" className="post-error-image"/>
        <div className="error-text">
            <p className="error-type">Network Error</p>
            <p className="close-icon" onClick={handleClick}>X</p>
        </div>    
    </div>
  )
}

export default PostError