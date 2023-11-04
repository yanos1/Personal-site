import React from 'react'

function Quote({ key, text, style, userName, date }) {
    return (
        <div className='quote--container' style={style} >
            <p className='quote--text'>{text}</p>
            <div className='quote--info'>
                <span>{userName}</span>
                <span>{date}</span>
            </div>
        </div>

    )
}

export default Quote