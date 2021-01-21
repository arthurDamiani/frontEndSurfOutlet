import React from 'react'

import Sort from '../Sort'

const ShelfHeader = ({productsLength}) => {
  return (
    <div className="shelf-container-header">
      <small className="products-found">
        <span>{productsLength} Produto(s) encontrados.</span>
      </small>
      <Sort />
    </div>
  )
}

export default ShelfHeader
