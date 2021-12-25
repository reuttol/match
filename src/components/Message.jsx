import React from 'react'

const Message = ({msg, cls}) => {
    return (
        <div className={`message ${cls && "hide"}`}>
            {msg}
        </div>
    )
}

export default Message;