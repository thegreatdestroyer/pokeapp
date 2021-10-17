import React, { useState, useCallback } from 'react';
import './index.css';


const Pagination = ({ onUpdateLimit, onUpdateOffset, total, limit, activePage }) => {
    const buttonsTotal = Math.ceil(total / limit)
    const pageButtons = Array.from({ length: buttonsTotal }, (_, index) => index + 1);

    const getActivePageNum = useCallback( (num) => {
        if (activePage !== num) {
            const newOffset = limit * num - limit;
            onUpdateOffset(newOffset, num);
        }
    }, [activePage, onUpdateOffset]);
    
    
    return (
        <div className="pagination">
            <div className="pagination-box">
                {pageButtons.map(num => {
                    const activeClassName = activePage === num ? 'isActive' : 'isDefault';

                    return (
                         <button type="button" onClick={() => getActivePageNum(num)} className={`pagination-button ${activeClassName}`}>
                        {num}
                        </button>
                    )
                })}
            </div>
        </div>
    )
};

export default Pagination;