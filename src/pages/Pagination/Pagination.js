import React from "react";
import "./PaginationStyle.css"

const Pagination = ({ pokemonPerPage, totalPokemon, paginate }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li key={number}>
                            <a onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination;