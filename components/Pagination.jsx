import React from 'react';
import { usePagination, DOTS } from './usePagination';
import '../public/paginate.scss';
const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={`${className} pagination-container`}
        >
            <li
                className={
                    ` ${currentPage === 1 ? 'disabled' : ""} pagination-item`
                }
                onClick={onPrevious}
            >
                <div className={`arrow left`} />
            </li>
            {paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots">&#8230;</li>;
                }

                return (
                    <li
                        className={
                            ` ${pageNumber === currentPage ? "selected" : ""} pagination-item`
                        }
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={
                    `${currentPage === lastPage ? 'disabled' : ""} pagination-item`
                }
                onClick={onNext}
            >
                <div className="arrow right" />
            </li>
        </ul>
    );
};

export default Pagination;
