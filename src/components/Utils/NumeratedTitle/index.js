import React from 'react'

import './numeratedTitle.css'

function NumeratedTitle({number, title}) {
    return (
        <div className='numerated-title-container'>
            <p className='numerated-title-number'>{number}</p>
            <h3 className='numerated-title-title'>{title}</h3>
        </div>
    )
}

export default NumeratedTitle
