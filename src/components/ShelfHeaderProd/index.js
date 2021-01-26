import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../../services/shelf/actions';

import Spinner from './Spinner';
import ShelfHeader from './ShelfHeader';
 
import './style.css';
function Shelf({products, fetchProducts, filters, sort}) {

  const [isLoading, setIsLoading] = useState()

  useEffect(() => {
    handleFetchProducts()
  }, [filters, sort])

  const handleFetchProducts = () => {
    setIsLoading(true)
    fetchProducts(filters, sort, () => setIsLoading(false))
  }

    return (
      <React.Fragment>
        {isLoading && <Spinner />}
        <div className="shelf-container">
          <ShelfHeader productsLength={products.length} />
         </div>
      </React.Fragment>
    )
  }


const mapStateToProps = state => ({
  products: state.shelf.products,
  filters: state.filters.items,
  sort: state.sort.type
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Shelf);