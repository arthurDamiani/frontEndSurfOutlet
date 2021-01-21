import React from 'react'

const Pagination = ({productsPerPage, totalProducts, paginate}) => {
    const pageNumbers = []

     for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            {pageNumbers.map(number => (
                <li key={number} >
                    <a onClick={() => paginate(number)} >
                        {number}
                    </a>
                </li>
            ))}          
        </nav>
    )
}

export default Pagination