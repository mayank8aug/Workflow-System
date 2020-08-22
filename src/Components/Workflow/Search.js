import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../actions/index';
import { debounce } from '../../utils';

function handleSearchQuery(query, dispatch) {
    dispatch(setSearchQuery(query));
}

const handleInput = debounce(handleSearchQuery, 200);

function Search() {
    const dispatch = useDispatch();
    return (
        <div className="workflow-search">
            <input className="search" type="text" placeholder="Search Workflows" onKeyUp={ev => handleInput(ev.target.value, dispatch)} />
        </div>
    );
}

export default Search;